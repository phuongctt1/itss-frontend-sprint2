import { Col, Row } from 'antd'
import styled from 'styled-components'
import Container from '~/layouts/components/Container'
import ColLeft from '~/views/student/ColLeft'


const Student = () => {
  return (
    <Wrapper>
      <Container>
        <Panel>
          <Row gutter={[16, 16]}>
            <Col className='col-left' span={16}>
              <ColLeft />
            </Col>

          </Row>
        </Panel>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Panel = styled.div`
  margin-top: 20px;

  .col-left,
  .col-right {
    border: 1px solid;
    border-radius: 8px;
    padding: 20px 0;
  }
`

export default Student
