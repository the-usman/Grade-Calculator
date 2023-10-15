import { DeleteIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Main = (props) => {
    const [input, setInput] = useState(1);
    const [creditHours, setCreditHours] = useState([])
    const [grade, setGrade] = useState([])
    const [gpa, setGpa] = useState('')
const reset =()=>{
    setInput(1)
    setGpa('')
    setCreditHours([])
    setGrade([])
}
    const creditOnChange = (e, i) => {
        const value = e.target.value;
        let finalValue = value.replace(/[^0-9.]/g, '');


        finalValue = parseFloat(finalValue);
        if (isNaN(finalValue) || finalValue > 10) {
            finalValue = 0;
        }

        setCreditHours((prevCreditHours) => {
            const updatedCreditHours = [...prevCreditHours];
            updatedCreditHours[i] = finalValue;
            return updatedCreditHours;
        });
    }

    const CalculateGpa = () => {
        if (grade.includes('') || creditHours.includes(0)) {
            return
        }
        var sum = 0
        for (let index = 0; index < grade.length; index++) {
            sum += props.scheme[grade[index]] * creditHours[index]
        }
        const totalCredits = creditHours.reduce((acc, curr) => acc + curr, 0); // Calculate total credits
        const gpa1 = sum / totalCredits;
        console.log(gpa1)
        setGpa(gpa1)
        setInput(0);
    }

    const handleDeleteBox = (indexToRemove) => {
        setGrade((prevGrade) => {
            const updatedGrade = [...prevGrade];
            updatedGrade.splice(indexToRemove, 1);
            return updatedGrade;
        });
        setCreditHours((prevCreditHours) => {
            const updatedCreditHours = [...prevCreditHours];
            updatedCreditHours.splice(indexToRemove, 1);
            return updatedCreditHours;
        });
        setInput((prevInput) => prevInput - 1);
    };


    const gradeOnChange = (e, i) => {
        let value = e.target.value;
        value = value.toUpperCase()
        const validationArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D-', 'D', 'F']
        if (value.length > 2 || !validationArray.includes(value)) {

            setGrade(prevGrade => {
                const updatedGrade = [...prevGrade];
                updatedGrade[i] = "";
                return updatedGrade;
            });
        } else {

            setGrade(prevGrade => {
                const updatedGrade = [...prevGrade];
                updatedGrade[i] = value.toUpperCase();
                return updatedGrade;
            });
        }
    }


    const boxComponents = [];
    for (let i = 0; i < input; i++) {
        boxComponents.push(
            <Box
                key={i}
                w={'100%'}
                display={'flex'}
                mt={3}
            >
                <FormControl>
                    <FormLabel>Enter Grade</FormLabel>
                    <Input
                        w={'80%'}
                        placeholder='Grades eg. A+ A etc...'
                        onChange={(e) => gradeOnChange(e, i)}
                        value={grade[i] || ''}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Enter Credit Hour</FormLabel>
                    <Input
                        w={'90%'}
                        placeholder='Credit Hours eg. 1 2 3 etc...'
                        onChange={(e) => creditOnChange(e, i)}
                        value={creditHours[i] || ''}
                    />
                </FormControl>
                <DeleteIcon color={'red'} onClick={() => handleDeleteBox(i)} />
            </Box>
        );
    }

    return (
        <Container>
            {boxComponents}

            {!gpa  ? 
                (<Box
                w={'100%'}
                display={'flex'}
                justifyContent={'space-between'}
                p={4}
            >
                <Button
                    bg={'#252B48'}
                    color={'white'}
                    _hover={{
                        bg: '#40E0D0'
                    }}
                    onClick={() => {
                        setInput(input + 1)
                    }}
                >Add<SmallAddIcon ml={3} /></Button>
                <Button bg={'#252B48'} color={'white'} _hover={{
                    bg: '#40E0D0'
                }
                }
                    disabled={grade.includes('') || creditHours.includes(0)}
                    onClick={() => CalculateGpa()}>Calculate</Button>
            </Box>) : (
                <Box mt={'30px'} textAlign={'center'}>
            <Heading as={'h1'}>Your GPA IS :<br/><span style={{color : '#40E0D0', fontSize:'60px'}}>{gpa}</span></Heading>
            <Button bg={'#252B48'} color={'white'} mt={'100px'} _hover={{
                    bg: '#40E0D0'
                }
                }
                    onClick={() => reset()}>Calculate Again</Button>
            </Box>
            )
            }
        </Container>
    )
}

export default Main
