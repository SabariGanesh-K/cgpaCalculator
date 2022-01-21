import {Row,Col} from 'reactstrap'
import './footer.css'
function Footer(){
    return(
        
        <Row>
        <div className = "footer" style = {{textAlign:'center'}} >
            <div className = "footerSpl">
            <Col auto>
                <a href = "https://sabz.netlify.app" style = {{textDecoration:"none"}} target = "_blank" rel="noreferrer">
            <div className = "footerName" style = {{textAlign:'center',justifyContent:'center'}}>
                <br/>
            Made With ❤️ by SabariGaneshK <br/> ⚜️  ⚜️  ⚜️
            </div>
            </a>
            </Col>
            <br/>
      
          </div>

        </div>
        </Row>
        
        
    )
}
export default Footer;