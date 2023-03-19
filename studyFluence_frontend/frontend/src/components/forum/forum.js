import ForumStudents from './forumStudetnts'
import ForumProfessionals from './forumProfessionals'
import { useSelector } from 'react-redux';

function Forum (props){
  const client = props.client
   const singedInAs = useSelector((state) => state.auth.singedInAs);


    console.log('Forum page')
    return (
      (singedInAs==='1'? <ForumStudents client={client}/>:<ForumProfessionals client={client}/>)
     
    )
}

export default Forum;
