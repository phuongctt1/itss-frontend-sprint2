import { Col, Row } from 'antd'
import styled from 'styled-components'
import Container from '~/layouts/components/Container'
import Studentlist from '~/views/student/Studentlist'


const Student = () => {
  return (
    <Wrapper>
      <Container>
        <Panel>
       
          <Row gutter={[16, 16]}>
            <Col className='col'span={24} >
              <Studentlist/>
            </Col>

          </Row>
         
        </Panel>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;

`
const Panel = styled.div`

  margin-top: 20px;
  display: flex; justify-content: center;
  
  .col {
    border: 1px solid;
    border-radius: 0px;
    padding: 10px 0;
    width:100%
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
`


export default Student