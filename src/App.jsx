
import PropsBasic from './components/01-PropsBasic';
import ValueProps from './components/02-ValueProps';
import PropsPass from './components/03-PropsPass';
import './App.css';

function App() {
  let dtype='template'+2.0
  let anyData="This "+"is Javascript "+ dtype +" Called template"

  return (
    <>
     <PropsBasic name="Shibham" title="Gupta"/>

     <ValueProps 
       strData="This is String Data"
       numData={123}
       boolData={false}
       objData={{name:"Shibham", title:"Gupta"}}
       arrData={[1,2,3,4,5,6,5,8,9,10]}
       jsxData={2+2+2+14-3-(2/3)*(23*5)}
       anyData={anyData}
     />

     <PropsPass students={['Arnab','Atanu','Shibham','Supriya','Karan','Debjani','Anish']}/>
    </>
  )
}

export default App
