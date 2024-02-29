import InputText from "./InputText";

export default function InputForm(){
    return (<form>
         <input className="inputText" placeholder="Enter task" value=""></input>
         <button>
            <span class="text">Add task</span>
        </button>
    </form>)
}