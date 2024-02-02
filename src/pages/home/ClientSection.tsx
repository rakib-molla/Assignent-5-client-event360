import spotify from '@/assets/img/spotify.png'
import google from '@/assets/img/google.png'
import uber from '@/assets/img/uber.png'
import microsoft from '@/assets/img/microsoft.png'
import shopify from '@/assets/img/shopify.png'
import evernote from '@/assets/img/evernote.png'
import adobe from '@/assets/img/adobe.png'
import paypal from '@/assets/img/paypal.png'
import amazon from '@/assets/img/amazon.png'
import asana from '@/assets/img/asana.png'
import Container from '@/layouts/Container'


function ClientSection() {
  return (
    <>
    <Container> 
    <div className=' my-10'>
        <h1 className="text-center text-5xl font-bold mb-10 p-10">Our Valuable Client</h1>
        <div className="grid md:grid-cols-4 lg:grid-cols-5  items-center justify-items-center gap-10">
   
            <div>
                <img src={spotify} alt="" />
            </div>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={uber} alt="" />
            </div>
            <div>
                <img src={spotify} alt="" />
            </div>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={uber} alt="" />
            </div>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={uber} alt="" />
            </div>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={uber} alt="" />
            </div>
            
            
        </div>
    </div>
    </Container>
     </>
  )
}

export default ClientSection;