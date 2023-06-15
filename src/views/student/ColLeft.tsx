import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import styled from 'styled-components';
import { data } from './data';
import { Badge } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const ColLeft = () => {
  return (
    <Wrapper>
      <PersonList>
        {data.map((person, index) => {
          const renderAvatar = () => {
            if (person.avatar) {
              return <img src={person.avatar} alt='Avatar' />;
            }
            return <BiUserCircle className='avatar-icon' />;
          };

          let badgeColor: 'green' | 'red' | 'default' = 'default';
          let badgeIcon: React.ReactNode | null = null;

          switch (person.status) {
            case 'approved':
              badgeColor = 'green';
              badgeIcon = <CheckCircleOutlined />;
              break;
            case 'pending':
              badgeColor = 'red';
              badgeIcon = <ExclamationCircleOutlined />;
              break;
            case 'unread':
              badgeColor = 'default';
              badgeIcon = <ClockCircleOutlined />;
              break;
            default:
              break;
          }

          return (
            <Person key={person.fullName + index}>
              {renderAvatar()}

              <PersonInfo>
                <div className='header'>
                  <h3 className='fullname'>{person.fullName}</h3>
                  <Badge color={badgeColor} icon={badgeIcon} />
                </div>
                <p className='nofication'>{person.nofication}</p>
              </PersonInfo>
            </Person>
          );
        })}
      </PersonList>
    </Wrapper>
  );
};


const Wrapper = styled.div``



const PersonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 700px;
  overflow: auto;
`
const Person = styled.div`
  border: none;
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
