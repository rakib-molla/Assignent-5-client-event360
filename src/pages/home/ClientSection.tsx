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


function ClientSection() {
  return (
    <div className='px-10'>
        <h1 className="text-center text-5xl font-bold">Our Valuable Client</h1>
        <div className="grid grid-cols-5 gap-10">
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
                <img src={microsoft} alt="" />
            </div>
            <div>
                <img src={evernote} alt="" />
            </div>
            <div>
                <img src={adobe} alt="" />
            </div>
            <div>
                <img src={paypal} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
            <div>
                <img src={amazon} alt="" />
            </div>
            <div>
                <img src={asana} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ClientSection;