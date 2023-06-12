import  react  from "@babel/types";
import './modal.css'
react

const Modal = () => {
    return <div className="modal-container">
        <div className="modal">
            <form>
                <div className="form-group">
                    <label htmlFor="page">Page</label>
                    <input type="text" name='page' />
                </div>
                <div className="form-group">
                    <label htmlFor="desciption">Desciption</label>
                    <textarea type="text" name='description' />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status">
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    </div>;
}
 
export default Modal;