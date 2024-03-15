import cuentaDNI from './assets/logoCDNI.png'
import visa  from "./assets/visaNM.png";
import mercadoPago from './assets/mercadoPago.png'
import mc from './assets/MC.png';


function Footer() {
// seccion-oscura d-flex flex-column align-items-center container-fluid justify-content-center  
    return (
    <div className=' d-flex flex-column align-items-center justify-content-center container-fluid container-fluid '>
        <footer className="row d-flex justify-content-between">    
{/* fila1 --------------------------------------------------------------------------- */}
 <div className=" col-sm-4 col align-items-center ">
                    <div>  <p className="foot4">Compra con confianza</p></div>
                    <div className="row">
                        <div className="col-lg-4  col-6  chiki">
                            <ul>
                                 <li>
                                    <img src={cuentaDNI} alt='Logo de CuentaDNI' />
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 invisible"></div>
                        <div className="col-lg-4 col-6 chiki1">
                             <ul> 
                                <li className="chiki">
                                    <img src={visa} alt="logo de la tarjeta visa" />
                                </li>
                            </ul>
                        </div>
                    </div>

        <div className='row '>
                <div className="col-lg-4 col-6 chiki1">
                    <ul>
                        <li className=" chiki">
                          <img src={mercadoPago}  alt='logo de MercadoPago' />
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 invisible"></div>
                 <div className="col-lg-4 chiki1 col-6 ">
                    <ul>
                        <li className=" chiki">
                          <img src={mc} alt='logo de MasterCard' />
                        </li>
                    </ul>
                </div>
                </div>
                </div>
               
                <div className="col col-md-4 d-flex justify-content-center facebook">
                    <div className="av_facebook_widget_wrap "><div className="fb-page fb_iframe_widget" 
                    data-width="500" data-href="https://www.facebook.com/profile.php?id=100007139551398" data-small-header="false"
                    data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" 
                    data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;
                    app_id=&amp;container_width=245&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffarmgrid
                    &amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;
                    width=500"><span style={{ width: '245px', height: '130px'}}><iframe 
                    name="f16a3f9d4a65114" width="500px" height="1000px" data-testid="fb:page Facebook Social Plugin" 
                    title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen={true} 
                    scrolling="no" allow="encrypted-media" 
                    src="https://www.facebook.com/v2.7/plugins/page.php?adapt_container_width=true&amp;app_id=
                    &amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df97bd520942f0c%26domain%3Dfarmgrid.org%26is_
                    canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ffarmgrid.org%252Ff175726e8dd6cb%26relation%3Dparent.
                    parent&amp;container_width=245&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffarmgrid
                    &amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;
                    width=500" style={{border: 'none', visibility: 'visible', width: '245px', height: '130px'}} data-lfwykg-handled="1"
                    className=""></iframe><div className="lfwykgOverlay" 
                    style={{background:'#666',opacity:'0.0001',position:'absolute',cursor:'pointer', height:'130px',width:'245px',left:'0px',top:'0px',zIndex:'2'}}>
                    <div 
                    style={{background:'#666',opacity:'0.0001',position:'absolute',cursor:'pointer', height:'130px',width:'245px',left:'0px',top:'0px',zIndex:'2'}}>
                    </div>
                    </div></span>
                </div></div></div>

                <section>
                    <h2 className="contactanos"></h2>
                </section>

             <div className=" text-center row">
                <div className='col-12'><p>© 2023 Los Hermasnos Inc. Derechos reservados. </p></div>
            </div>
        </footer>
    </div>
    )
}

export default Footer

{/* 
<footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">    
<div className="row">
<div className="col-12 col-md-4">
<p className="foot"><a>REGIGERATOR_BROS.OK</a></p>
<p className="foot2"> <a>11-6666-6666</a></p>                  
</div>
<div className="col-12 col-md-4">
<div className="av_facebook_widget_wrap "><div className="fb-page fb_iframe_widget" 
        data-width="500" data-href="https://www.facebook.com/profile.php?id=100007139551398" data-small-header="false"
         data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" 
         data-show-posts="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;
         app_id=&amp;container_width=245&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffarmgrid
         &amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;
         width=500"><span style={{ width: '245px', height: '130px'}}><iframe 
         name="f16a3f9d4a65114" width="500px" height="1000px" data-testid="fb:page Facebook Social Plugin" 
         title="fb:page Facebook Social Plugin" frameBorder="0" allowtransparency="true" allowFullScreen={true} 
         scrolling="no" allow="encrypted-media" 
         src="https://www.facebook.com/v2.7/plugins/page.php?adapt_container_width=true&amp;app_id=
         &amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df97bd520942f0c%26domain%3Dfarmgrid.org%26is_
         canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ffarmgrid.org%252Ff175726e8dd6cb%26relation%3Dparent.
         parent&amp;container_width=245&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffarmgrid
         &amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;show_posts=false&amp;small_header=false&amp;
         width=500" style={{border: 'none', visibility: 'visible', width: '245px', height: '130px'}} data-lfwykg-handled="1"
          className=""></iframe><div className="lfwykgOverlay" 
          style={{background:'#666',opacity:'0.0001',position:'absolute',cursor:'pointer', height:'130px',width:'245px',left:'0px',top:'0px',zIndex:'2'}}>
        <div 
        style={{background:'#666',opacity:'0.0001',position:'absolute',cursor:'pointer', height:'130px',width:'245px',left:'0px',top:'0px',zIndex:'2'}}>
        </div>
        </div></span>
        </div></div></div>
        <div className="col-12 col-md-4">
        <div className="row">  <p className="foot4">Acerca de nosotros</p></div>
        <div className="row claseAparte">
            <div className="col-4 col-md-2 chiki">
                <ul>
                    <li>
                        <img src={cuentaDNI} className='hidden-xs hidden-sm ps-creditcard' alt='Lodo de CuentaDNI' />
                    </li>
                </ul>
            </div>
            <div className="col-4 invisible"></div>
                <div className="col-4 chiki1">
                    <ul> 
                        <li className="col-4 chiki">
                            <img className="ps-creditcard" src={visa} alt="logo de la tarjeta visa" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-4 invisible"></div>
                <div className="col-4 chiki1">
                    <ul>
                        <li className="col-4 chiki">
                          <img src={mercadoPago} alt='logo de MercadoPago' />
                        </li>
                    </ul>
                </div>
            </div>

    </div>
</footer>

<div className="col-12 col-md-4"></div>
            <div className="row">  <p className="foot4">Acerca de nosotros</p></div>
            <div className="row claseAparte">
                <div className="col-4 col-md-2 chiki">
                    <ul/>
                        <li/>
                            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" media="(max-width:409px)"/>
                            <img src="/assets/logoCDNI.png" style="width: auto; height: 5vw;" className="hidden-xs hidden-sm ps-creditcard" media="(min-width:410px)"/>
                        <li/>
                    <ul/>
                </div>
            </div>


<div className="col-4 invisible"></div>
<div className="col-4 chiki1">
    <ul/>
        <li className="col-4 chiki"/>
            <source srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" media="(max-width:409px)"/>
            <img className="ps-creditcard" src="/assets/mercadoPago.png" style="width: auto; height: 5vw;" media="(min-width:410px)"/>
        <li/>
    <ul/>
</div>  */}