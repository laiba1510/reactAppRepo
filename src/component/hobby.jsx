import { FormGroup ,styled, FormControl, InputLabel, Input, Button} from "@mui/material";
import AddReactionSharpIcon from '@mui/icons-material/AddReaction';

const  Container = styled(FormGroup)
`
width:50%;
margin : 5% auto 0 auto;
& > div
{
    margin-top:20px

}
`

const Hobby = () =>
{
    return(
        <Container>
            <h1>Skill Check Timeeee!!!</h1>
            <FormControl>
                <InputLabel>Enter Your Unique Skill</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>Rate Your Skill</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
            <Button variant='outlined' 
            color="secondary"
            endIcon={<AddReactionSharpIcon/>} onClick={() => { alert('✔️ You got an amazing Skill.') }} 
             >Review SKill</Button>
            </FormControl>

        </Container>
    )
}

export default Hobby;