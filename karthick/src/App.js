// import logo from '../src/Images/parking.png';
import './App.css';
import BackgroundImage from './component/Back 1';
// import Firstpage from '../src/Components/Firstpage';
// import ParkPage from './Components/ParkPage';
import Startpage from './component/Startpage';
import styled from 'styled-components';


const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  margin-top:5%;
  align-content:center;
`

function App() {
  return (
    <StyledContainer> 
      <Startpage />
      
    </StyledContainer>
       
    
  );
}

export default App;

