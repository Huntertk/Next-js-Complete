import React from 'react'

const AllProjects = async (props:{params:Promise<{all:string[]}>}) => {
    const all = (await props.params).all;
    console.log(all);
    
  return (
    <div>AllProjects</div>
  )
}

export default AllProjects