// import './index.css'

const PassWordContainer = props => {
  const {details, isCheckboxClicked, deletePassword} = props
  const {id, username, website, password} = details
  const userCard = username[0].toUpperCase()

  const deleteItem = () => {
    deletePassword(id)
  }
  return (
    <li key={id}>
      <div>
        <p>{userCard}</p>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {isCheckboxClicked ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          type="button"
          key={id}
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PassWordContainer

// const PassWordContainer = props => {
//   const {details, isCheckboxClicked, deletePassword} = props
//   const {id, username, website, password} = details
//   const userCard = username[0].toUpperCase()

//   const deleteItem = () => {
//     deletePassword(id)
//   }

//   return (
//     <li className="list-container" key={id}>
//       <div className="container">
//         <p className="profile">{userCard}</p>
//         <div className="user-details">
//           <p className="website">{website}</p>
//           <p className="username">{username}</p>
//           {isCheckboxClicked ? (
//             <p className="password">{password}</p>
//           ) : (
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
//               alt="stars"
//               className="password-hide"
//             />
//           )}
//         </div>
//         <button
//           type="button"
//           key={id}
//           onClick={deleteItem}
//           data-testid="delete"
//           className="delete-button"
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
//             alt="delete"
//             className="delete-img"
//           />
//         </button>
//       </div>
//     </li>
//   )
// }

// export default PassWordContainer
