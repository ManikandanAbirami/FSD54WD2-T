import './App.css'
import List from './List';
import Search from './Search'

function App() {
  const name = "Manikandan Anbalagan"
  const list = [
    {
      title: 'React',
      mentor: 'Manikandan Anbalagan',
      points: 4
    },
    {
      title: 'Node',
      mentor: 'Manikandan Anbalagan',
      points: 5
    },
    {
      title: 'MongoDB',
      mentor: 'Manikandan Anbalagan',
      points: 3
    }
  ];

  return (
    <>
      <Search name={name} />
      <List list={list} name={name} />
    </>
  )
}

export default App
