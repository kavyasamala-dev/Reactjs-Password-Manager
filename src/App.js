import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import PasswordContainer from './PassWordContainer'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    isCheckboxClicked: false,
    website: '',
    username: '',
    password: '',
    searchInput: '',
  }

  websiteName = event => {
    this.setState({website: event.target.value})
  }

  enteredPassword = event => {
    this.setState({password: event.target.value})
  }

  enteredSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  userName = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      password,
      username,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  changeValue = () => {
    const {isCheckboxClicked} = this.state
    this.setState({isCheckboxClicked: !isCheckboxClicked})
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const newList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: newList})
  }

  render() {
    const {
      passwordsList,
      isCheckboxClicked,
      website,
      username,
      password,
      searchInput,
    } = this.state

    const searchedPasswordList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="first-container">
          <form onSubmit={this.addPassword}>
            <h1>Add New Password</h1>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.websiteName}
                value={website}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.userName}
                value={username}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.enteredPassword}
                value={password}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <img
            className="bg-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div>
          <div>
            <div>
              <div>
                <h1>Your Passwords</h1>
                <p>{searchedPasswordList.length}</p>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.enteredSearchInput}
                />
              </div>
            </div>
            <hr />
          </div>
          <input
            type="checkbox"
            value={searchInput}
            onClick={this.changeValue}
            id="check"
          />
          <label htmlFor="check">Show passwords</label>
          {searchedPasswordList.length === 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul>
              {searchedPasswordList.map(eachPassword => (
                <PasswordContainer
                  isCheckboxClicked={isCheckboxClicked}
                  details={eachPassword}
                  key={eachPassword.id}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App

// import {Component} from 'react'
// import {v4 as uuidv4} from 'uuid'
// import PassWordContainer from './PassWordContainer'
// import './App.css'

// class App extends Component {
//   state = {
//     passwordsList: [],
//     username: '',
//     password: '',
//     searchInput: '',
//     isCheckboxClicked: false,
//     website: '',
//   }

//   websiteName = event => {
//     this.setState({website: event.target.value})
//   }

//   enteredPassword = event => {
//     this.setState({password: event.target.value})
//   }

//   enteredSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   userName = event => {
//     this.setState({username: event.target.value})
//   }

//   changeValue = event => {
//     const {isCheckboxClicked} = this.state
//     this.setState({isCheckboxClicked: !isCheckboxClicked})
//   }

//   deletePassword = event => {
//     const {passwordsList} = this.state
//     const newList = passwordsList.filter(eachItem => eachItem.id !== id)
//     this.setState({passwordsList: newList})
//   }

//   addPassword = event => {
//     event.preventDefault()
//     const {website, username, password, passwordsList} = this.state
//     const newPassword = {
//       id: uuidv4(),
//       website,
//       password,
//       username,
//     }
//     this.setState(prevState => ({
//       passwordsList: [...prevState, newPassword],
//       website: '',
//       password: '',
//       username: '',
//     }))
//   }

//   render() {
//     const {
//       passwordsList,
//       username,
//       password,
//       searchInput,
//       isCheckboxClicked,
//       website,
//     } = this.state

//     const searchedPasswordList = passwordsList.filter(eachPassword =>
//       eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
//     )

//     return (
//       <div className="bg-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
//           alt="app logo"
//           className="app-logo"
//         />

//         <div className="card-container">
//           <form className="form-container" onSubmit={this.addPassword}>
//             <h1 className="heading">Add New Password</h1>
//             <div className="container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                 alt="website"
//                 className="form-sub-image"
//               />
//               <input
//                 type="text"
//                 onChange={this.websiteName}
//                 value={website}
//                 placeholder="Enter Website"
//                 className="input"
//               />
//             </div>

//             <div className="container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                 alt="username"
//                 className="form-sub-image"
//               />
//               <input
//                 type="text"
//                 onChange={this.userName}
//                 value={username}
//                 placeholder="Enter Username"
//                 className="input"
//               />
//             </div>

//             <div className="container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                 alt="password"
//                 className="form-sub-image"
//               />
//               <input
//                 type="password"
//                 onChange={this.enteredPassword}
//                 value={password}
//                 placeholder="Enter Password"
//                 className="input"
//               />
//             </div>
//             <button type="submit" className="add-button">
//               Add
//             </button>
//           </form>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
//             alt="password manager"
//             className="form-image"
//           />
//         </div>

//         <div>
//           <div className="password-container">
//             <div className="password-sub-container">
//               <div className="your-password-container">
//                 <h1 className="your-password">Your Passwords</h1>
//                 <p className="number-of-passwords">
//                   {searchedPasswordList.length}
//                 </p>
//               </div>
//               <div className="search-container">
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                   className="search-image"
//                   alt="search"
//                 />
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   value={searchInput}
//                   onChange={this.enteredSearchInput}
//                   className="search-input"
//                 />
//               </div>
//             </div>
//             <hr />
//           </div>
//           <input
//             type="checkbox"
//             value={searchInput}
//             onClick={this.changeValue}
//             id="check"
//             className="checkbox"
//           />
//           <label className="show-passwords" htmlFor="check">
//             Show Passwords
//           </label>
//           {searchedPasswordList.length === 0 ? (
//             <div className="no-password-image">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//                 alt="no passwords"
//                 className="no-password-img"
//               />
//               <p className="no-password-des">No Passwords</p>
//             </div>
//           ) : (
//             <ul className="unordered-list">
//               {searchedPasswordList.map(eachPassword => (
//                 <PassWordContainer
//                   isCheckboxClicked={isCheckboxClicked}
//                   details={eachPassword}
//                   key={eachPassword.id}
//                   deletePassword={this.deletePassword}
//                 />
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     )
//   }
// }

// export default App
