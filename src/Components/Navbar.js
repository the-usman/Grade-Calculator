
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Text,

} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <Box
            w={'100vw'}
            bg={'#252B48'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            
        >
            <Text
                color={'#40E0D0'}
                fontSize={'25px'}
                p={3}
                ml={6}
            >
                Thinkcod
            </Text>
            <Box display={'flex'}>
                <Text color={'white'} fontSize={'20px'} transition={'0.3s'} _hover={
                    {
                        color:'#40E0D0',
                        borderBottom : '1px solid #40E0D0'
                    }
                }
                cursor={'pointer'}
                p={3}
                mr={2}
                >
                    Help
                </Text>
                <Text color={'white'} fontSize={'20px'} transition={'0.3s'} _hover={
                    {
                        color:'#40E0D0',
                        borderBottom : '1px solid #40E0D0'
                    }
                }
                cursor={'pointer'}
                p={3}
                >
                    About
                </Text>
            </Box>
            <Box>
                <Menu>
                    <MenuButton>
                        <SettingsIcon color={'#40E0D0'} fontSize={'30px'} mr={10}/>
                    </MenuButton>
                    <MenuList                    >
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Download</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}

export default Navbar
