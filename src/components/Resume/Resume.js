import React from 'react'
import styled from 'styled-components'
import {Avatar} from './Avatar'

const ResumeWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
`
export const Resume = () => {
  return (
    <ResumeWrapper className="resume p-6 bg-gray-200 h-screen">
      <div className="resume__cont max-w-screen-lg mx-auto bg-white px-6 py-10">
        <div className="grid grid-cols-7 gap-6">
          <div className="col-span-2 pr-6 border-r">
            <Avatar mode="circle" className="mb-10" />
          </div>
          <div className="col-span-5">
            <h2 className="text-4xl font-medium">Daniel Cortés</h2>
            <h1 className="text-lg" style={{color: 'darkgoldenrod'}}>Senior Front-End Developer</h1>
          </div>
        </div>
      </div>
    </ResumeWrapper>
  )
}