import Form from './Form'
  import { Slide, ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from './context';
import SingleItem from './SingleItem';
export const App = () => {
  const {list} = useGlobalContext()

  return <section className='section-center'>
  <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
transition={Slide}
draggable
/>
    <Form/>
    <div className="items">

    {list.length<1? <h4>create a todo to display here!</h4>:""}
    {list.map((item)=>{
      return <SingleItem key={item.id} {...item}/>
    })}
    </div>

  </section>
};

