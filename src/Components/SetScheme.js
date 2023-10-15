import { Box, Container, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const SetScheme = (props) => {
    const [upadatedScheme, setUpdated] = useState(props.scheme);

    const OnChange = (e) => {
        const { value, name } = e.target;
        if (value > 4 || value < 0)
            return
        const updatedSchemeCopy = { ...upadatedScheme }
        updatedSchemeCopy[name] = value;
        setUpdated(updatedSchemeCopy);
    };

    const changeScheme = () => {
        props.setScheme(upadatedScheme)
    }
    return (
        <Container>
            {props.scheme &&
                Object.keys(upadatedScheme).map((key) => (
                    <Box
                        key={key} // Use the key as the unique identifier
                        w={'100%'}
                        display={'flex'}
                        mt={3}
                    >
                        <FormControl>
                            <FormLabel>Grade</FormLabel>
                            <Input
                                w={'80%'}
                                placeholder='Grades eg. A+ A etc...'
                                value={key}
                                readOnly
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Respective GPA</FormLabel>
                            <Input
                                w={'90%'}
                                placeholder='Respective GPA...'
                                value={upadatedScheme[key]}
                                onChange={OnChange}
                                name={key}
                            />
                        </FormControl>

                    </Box>
                ))}
            <Button
                bg={'#252B48'}
                color={'white'}
                _hover={{
                    bg: '#40E0D0'
                }}
                onClick={changeScheme()}
            >
                Calculate
            </Button>
        </Container>
    );
};

export default SetScheme;
