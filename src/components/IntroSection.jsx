import React from "react"

// export default function IntroSection(){
//     return (
//         <section>
//             <h1 className="centered">Lorem ipsum dolor</h1>
//             <h3 className="centered" style={{color: '#666'}}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//             Quam in, ullam cumque quod, illo voluptate vel necessitatibus quidem obcaecati, 
//             suscipit ducimus. Sunt, veritatis dolorem. Iure ratione incidunt officiis molestiae quibusdam.
//             </h3>
//         </section>
//     )
// }

const e = React.createElement

//Как это выглядит на самом деле
export default function IntroSection(){
    return e('section',null, 
        [e('h1', {className:'centered', key:'zae'}, 'Lorem ipsum dolor'), 
        e('h3', {className:'centered', key: 'bal', style:{color: '#666'}}, 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in, ullam cumque quod, illo voluptate vel necessitatibus quidem obcaecati, suscipit ducimus. Sunt, veritatis dolorem. Iure ratione incidunt officiis molestiae quibusdam.'
         )])
}