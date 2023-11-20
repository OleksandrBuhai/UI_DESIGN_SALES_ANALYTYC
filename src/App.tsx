import styled from 'styled-components';
import './App.css'
import { SideBar } from '@/components/SideBar/Sidebar';
import { Dashboard } from '@/components/Dashboard/Dashboard';



function App() {
  return (
    <Div>
      <SideBar/>
      <Dashboard/>
    </Div>
  );
}

export default App;
const Div = styled.div`
  position: relative;
  
  `;

