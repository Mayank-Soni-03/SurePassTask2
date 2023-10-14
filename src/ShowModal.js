import "./ShowModal.css"
const Mymodal = ({closeModal}) =>{
  return( 
    <>
    <div className="modal-BC"></div>
    <div className="modal-container" >
    <h1 className="h1" >Update The Sheet</h1>
    <input className="textInput" placeholder="New Name" ></input>
    <br></br>
    <input placeholder="New Name" ></input>
    <br></br>
    <input placeholder="New Name" ></input>
    <br></br>
    <input placeholder="New Name" ></input>
    <p className="p" >Mayank p</p>
    <button className="modal-btn" onClick={closeModal} > Save </button>
    </div>
    </>
  );
}

export default Mymodal;