// Functions components
const Pet = (props) => {
  return React.createElement('div',{},[
    React.createElement('h1',{},props.name),
    React.createElement('h2',{},props.animal),
    React.createElement('h3',{},props.breed)
  ])
}

//Class component
class App extends React.Component {

  handleTitleClick(){
    alert('Someone clicked the title')
    console.log(this)
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement('h1', { onClick: this.handleTitleClick }, "Adopt Me!"),
      React.createElement(Pet,{
        name: 'luna',
        animal: 'dog',
        breed: 'Havanese',
      }),
      React.createElement(Pet,{
        name: 'Sun',
        animal: 'Cat',
        breed: 'mixed',
      }),
      React.createElement(Pet,{
        name: 'Sea',
        animal: 'Cat',
        breed: 'Mixed',
      })]
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
