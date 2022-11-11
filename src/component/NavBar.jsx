import {AppBar, Toolbar, styled} from '@mui/material'

const Header= styled(AppBar)`
background:#DB4082;
`
const Tabs = styled('p')
`
font-size: 40px;
margin-left: 150px;

`
const NavBar = () =>
{
    return(
        <Header position="static">
            <Toolbar>
                <Tabs>fLeX YoUr sKilL</Tabs>
            </Toolbar>
        </Header>
    )
}  

export default NavBar;