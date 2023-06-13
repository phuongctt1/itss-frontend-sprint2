import { Button, Input, Rate } from 'antd'
import { BiUserCircle } from 'react-icons/bi'
import { FaSort } from 'react-icons/fa'
import styled from 'styled-components'
import { data } from './data'

const ColLeft = () => {

  
  return (
    <Wrapper>
    

      <PersonList>
        {data.map((person, index) => {
          const renderAvatar = () => {
            if (person.avatar) {
              return <img src={person.avatar} alt='Avatar' />
            }
            return <BiUserCircle className='avatar-icon' />
          }

          return (
            <Person key={person.fullName + index}>
              {renderAvatar()}

              <PersonInfo>
                <div className='header'>
                  <h3 className='fullname'>{person.fullName}</h3>
                  
                </div>
                <p className='nofication'>{person.nofication}</p>
                
              </PersonInfo>
            </Person>
          )
        })}
      </PersonList>
    </Wrapper>
  )
}

const Wrapper = styled.div``



const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 700px;
  overflow: auto;
`
const Person = styled.div`
  border: 1px solid;
  border-radius: 8px;
  display: flex;

  .avatar-icon {
    font-size: 80px;
  }
`

const PersonInfo = styled.div`
  flex: 1%;
  padding: 0 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .other {
    display: flex;
    gap: 20px;
  }
`

export default ColLeft
