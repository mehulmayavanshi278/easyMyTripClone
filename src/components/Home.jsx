import React from 'react'

function Home() {
  return (
    <>
    <div className='navBar'>
      <div className='logo text-center'>
        <img className='w-100' src="./images/logo.jpg"/>
      </div>
      <div className='middleNav d-flex justify-content-between '>
        <ul className='d-flex justify-content-between align-items-center m-0 p-0 text-success'>
          <li className=''>FLIGHTS</li>
          <li>HOTELS</li>
          <li>FLIGHT+HOTEL</li>
          <li>TRAIN</li>
          <li>BUS</li>
          <li>HOLIDAYS</li>
          <li>CABS</li>
          <li>CRUISE</li>
          <li>MORE &nbsp; <i class="fa-solid fa-angle-down"></i></li>
        </ul>
        <div className='logo2'>
          <img className='w-100 h-100' src="./images/logolite.jpg"/>
        </div>
      </div>
      <div className='rightNav'>
        <div className='firstRightNav ps-5'>
          <li><i class="fa-solid fa-headphones text-muted p-0 m-0"></i> 24x7 Helpline <i class="fa-solid fa-angle-down"></i> </li>
          <div className='button'>
            <div className='flag m-0 p-0'>
              <img className='w-100' src="./images/flag.jpg"/>
            </div>
         <li>     &nbsp; India  <i className="fa-solid fa-angle-down"></i> </li>
          </div>

        </div>
        <div className='secondRightNav ps-5 align-items-end'>
        <div className=''>

        </div>
          <li> <i class="fa-solid fa-universal-access"></i>  My Account <i className="fa-solid fa-angle-down"></i></li>
        </div>
      </div>
    </div>

    <div className='containerr'>
       <div className='heading pt-5'> 
       <i class="fa-solid fa-plane px-3 text-white"></i>
       <div className='h3 text-white'>Search Lowest Price</div>
       </div>
       <div className='navv'>
        <ul className='d-flex p-0'>
          <li>One Way</li>
          <li>Round Trip</li>
          <li>Multi-City</li>
        </ul>
       </div>
       <div className='searchEng'>
          <div className='from py-2 p-0'>
            <p className='small m-0 mt-2 p-0  ps-3 text-muted'>FROM</p>
            <div className='h4  m-0  p-0  ps-3'>Delhi</div>
            <p className=' smalll m-0  p-0  ps-3 mt-1'>(DEL) INDIRA GANHDI INTERNATIONAL AIRPORT </p>
          </div>
          <div className='to'>
          <div className='from py-2 p-0'>
            <p className='small m-0 mt-2 p-0  ps-3 text-muted'>To</p>
            <div className='h4  m-0  p-0  ps-3'>Mumbai</div>
            <p className=' smalll m-0  p-0  ps-3 mt-1'> [BOM] Chhatrapati Shivaji International Airpo </p>
          </div>
         
          </div>
          <div className='DD'>
          <div className='from py-2 p-0'>
            <p className='small m-0 mt-2 p-0  ps-3 text-muted'>DEPARATURE DATE</p>
            <div className='h4  m-0  p-0  ps-3'>6 <span className='small m-0 mt-2 p-0 p text-muted'>jan's 2023</span></div>
            <p className=' smalll m-0  p-0  ps-3 mt-1'>Friday </p>
          </div>
          </div>
          <div className='RD'>
          <div className='from py-2 p-0'>
            <p className='small m-0 mt-2 p-0  ps-3 text-muted'>RETURN DATE</p>
            {/* <div className='h4  m-0  p-0  ps-3'>6 <span className='small m-0 mt-2 p-0 p text-muted'>jan's 2023</span></div> */}
            <p className=' smalll m-0  p-0  ps-3 mt-1'>book a round trip to save </p>
          </div>
          </div>
          <div className='TNC'>
          <div className='from py-2 p-0'>
            <p className='small m-0 mt-2 p-0  ps-3 text-muted'>TRAVELLER & CLASSES</p>
            <div className='h4  m-0  p-0  ps-3'>1 <span className='small m-0 mt-2 p-0 p text-muted'>travellers <i class="fa-solid fa-angle-down"></i></span></div>
            <p className=' smalll m-0  p-0  ps-3 mt-1'>ECONOMY </p>
          </div>
          </div>
          <div className='searchBtn d-flex justify-content-center align-items-center'>
             <div className='h4 text-white'>SEARCH</div>
          </div>
       </div>
       <div className='Checkx mt-3 pb-5'>
       <div className='d-flex'>


       <div className='Items d-flex align-items-center'>
       <input type="radio"name="types"/><div className='p m-0 p-0 text-white'>Defence Forces</div>
       </div>
       <div className='Items d-flex ms-3 align-items-center'>
       <input type="radio"name="types"/><div className='p m-0 p-0  text-white'>Students</div>
       </div>
       <div className='Items d-flex ms-3 align-items-center'>
       <input type="radio"name="types"/><div className='p m-0 p-0  text-white'>Senier Citizens</div>
       </div>
       <div className='Items d-flex ms-3 align-items-center'>
       <input type="radio"name="types"/><div className='p m-0 p-0  text-white'> Doctors and Nurses</div>
       </div>
       </div>
       <div className='WebCheckIn'>
          <p className='d-flex align-items-center m-0 p-0 py-1'>Web Check in</p>
       </div>
      
       </div>
    </div>

    <div className='recentSearch mt-3'>
       <div className='recentSearchC px-2 py-1'>
          <div className='firstRecentSearch'>
           <h6 className='p-0 m-0'> <b>Delhi </b></h6>
            <i className="fa-solid fa-arrow-right"></i>
            <h6 className='m-0 p-0'> <b> Mumbai </b></h6>
          </div>
          <div className='recentSDate'>
            <h6 className='p-0 m-0'> 06/01/2023</h6>
          </div>
          <div className='recentSQ mt-2'>
          <p className='p-0 m-0'> 1 adult , 0 child , 0 infant </p>
          </div>
        
       </div>
    </div>
    <div className='ImpInfo py-2 mt-3'>
     <h6 className='m-0 p-0'> <b> Important Info: </b>  To cancel/claim refund or reschedule/modify your booking. click here </h6>
    </div>
    <div className='ImpInfo2 py-2 mt-3'>
     <h6 className='m-0 p-0'> <b>  FREE Full Refund due to Medical Reasons: </b> EaseMyTrip brings an extraordinary offer in these tough times! </h6>
     <h6 className='m-0 p-0'>
Get full refund for domestic ticket in case you cancel it due to medical sickness. Best Part - There are ZERO extra charges for this service. </h6>
    </div>

    <div className='offers'>
      <div className='d-flex'>
        <h3>Exclusive Offers</h3>
        <nav className='d-flex align-items-center ps-5'>
          <ul className='d-flex align-items-center m-0 p-0'>
            <li>BEST OFFERS</li>
            <li>FLIGHT</li>
            <li>HOTEL</li>
            <li>BUS</li>
            <li>HOLIDAY</li>
          </ul>
        </nav>
      </div>
     <div className=' d-flex justify-content-between py-1'>
     <div className='viewAllOff d-flex align-items-center'>
        <li> <a className='text-primary p-0 m-0'> view all offers </a></li>
      </div>
          <div className='button p-0 d-flex justify-content-around bg-white align-items-center'>
          <li><i class="fa-solid fa-angle-left"></i> </li>
              <li><i class="fa-solid fa-angle-right"></i> </li>
             
            </div>
     </div>
    
    </div>

    <div className='offers1 mb-3'>
    <div className='offers1Scroll '>
    <div className='off1'>
        <div className='off1Img'>
          <img src="./images/upi.png"/>
        </div>
        <div className='off1Info'>
          <div className='h6 m-0 p-0'>make travel more rewarding</div>
          <p className='m-0 p-0'>skip to the trip</p>
        </div>
      </div>
    <div className='off1'>
        <div className='off1Img'>
          <img src="./images/upi.png"/>
        </div>
        <div className='off1Info'>
          <div className='h6 m-0 p-0'>make travel more rewarding</div>
          <p>skip to the trip</p>
        </div>
      </div>
    <div className='off1'>
        <div className='off1Img'>
          <img src="./images/upi.png"/>
        </div>
        <div className='off1Info'>
          <div className='h6 m-0 p-0'>make travel more rewarding</div>
          <p>skip to the trip</p>
        </div>
      </div>
    <div className='off1'>
        <div className='off1Img'>
          <img  clasName="w-100"src="./images/upi.png"/>
        </div>
        <div className='off1Info'>
          <div className='h6 m-0 p-0'>make travel more rewarding</div>
          <p>skip to the trip</p>
        </div>
      </div>
    </div>
     
    </div>

   <div className='BestDealsOnFT mt-5'>
    <h2 className='text-center'>Best Deal On Flight Ticket</h2>
    <div className='roww mt-1'></div>
   </div>


   <div className='container-fluid mt-2 mainRow'>
    <div className='tablee'>
     <div className='tableHead'>
      <div className='TableHData'>
        <h6>Departing From</h6>
        <select>

          <option>Select</option>
          <option>Delhi(DEL)</option>
          <option>Delhi(DEL)</option>
          <option>Delhi(DEL)</option>
          <option>Delhi(DEL)</option>
        </select>
      </div>
      <div className='TableHData'>
      
      </div>
      <div className='TableHData'>
        <h6>Travel Period</h6>
        <div className='boxxx m-0 p-0'>
          <p className='m-0 '>jan</p>
          <p className='m-0 '>fab</p>
          <p className='m-0 '>mar</p>
        </div>
    
      </div>
     </div>
    </div>
   </div>

   <div className='tableee'>
    <div className='tableHead borderth bg-white py-4'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0'>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
    <div className='tableHead borderth bg-white py-3'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0 '>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
    <div className='tableHead borderth bg-white py-3'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0 '>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
    <div className='tableHead borderth bg-white py-3'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0 '>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
    <div className='tableHead borderth bg-white py-3'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0'>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
    <div className='tableHead borderth bg-white py-3'>
      <div className='TableHData'>
        <h5 className='m-0 p-0'>To Mumbai</h5>
        <p className='m-0 p-0 psmall'>Saturday 21 jan 2023 | indigo</p>
      </div>
      <div className='TableHData d-flex align-items-center'>
        
        <p className='p-0 m-0 small'>Only Way as low as </p>
        <span className='h3 ms-2 m-0 p-0 '>₹ 4240</span>
      </div>
      <div className='TableHData'>
       <div className='btnn'>
        <p className='m-0 p-0'>BOOK NOW</p>
       </div>
      </div>
    </div>
   </div>
   <div className='Experience px-2 py-5'>
    <div className='h6'><b> Book your flight ticket with EaseMyTrip for a memorable experience </b></div>
     <p> EaseMyTrip.com is a reliable travel agent of India, which offers great deals on air tickets. Book flights for all destinations
      across India or world at the lowest airfares with us. As one of the leading travel portals of India, we constantly endeavor to
       make your vacation memorable. So, why to go anywhere else? Call us to save big on all kinds of travel products and services and
        have a memorable travel experience in a small budget. We believe in creating awesome vacations for our clients through customized 
        holiday packages & tours. Enjoy great saving on flights, hotels and holiday trip with EaseMyTrip.com.</p>

        <p>
        Cheap flights are available at EaseMyTrip.com, one of the leading travel portals of India. The company offers great discounts on domestic and international flight tickets. Being a reliable name in travel industry of India, we focus on providing smooth flight booking experience to our customers. So, book air tickets at the lowest airfare by planning your trip with us. You can also get all relevant information like how to get the boarding passes, difference between airline tickets and boarding pass tickets, flight status, arrival and departure times of the flights, web check-in and various information one needs to have before traveling.
        </p>
        
        <p>
        If you want to book your plane tickets at no convenience fee and looking for transparency in air ticket pricing, we are here to serve you with best possible offers. To reduce your flight booking cost, we have tied up with several banking partners. You can avail the best flight ticket booking deals for all major low cost carriers of India and abroad with us. Last minute discounts on air ticket booking are also available with us. So, go for a journey of your preferred destinations with the best airfare discounts.
        </p>

        <div className='h6'>How do you find the cheapest airfare?</div>
        <p>
         To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In compare to full service carriers, low cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets.
        </p>
        <div className='h6'>What is the best day of the week to buy plane tickets?</div>

        <p>As per previous findings, the best day to book cheapest flight tickets was Tuesday, but it’s not anymore. As more number of business travelers has started booking their flights during the week, the best day to buy those tickets is now Sunday. To avail more savings on flight tickets, try to book on a Sunday that is more than 21 days ahead of your trip.</p>
        <div className='h6'>
        Is it cheaper to book flights last minute?
        </div>
        <p>
        There is a popular belief that if you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief, booking airline tickets late is often cheaper. As per the research, flight tickets are generally cheaper if booked three weeks before departure than tickets booked 6 months ahead. But, this is not necessary. The price of flights fluctuate daily or even hourly in various cases. Many times, it changes due to the increasing demand of a particular route by the passengers. So, sometimes flights get cheaper while traveling closer to the travel date and in some cases, it gets expensive.
        </p>

        <div className='h6'>
        How can I fly for free?
        </div>
        <p>
        At present, EaseMyTrip has an offer to avail free flight tickets worth Rs.5000 daily. However, there are many other options like loyalty points, frequent flyer credit cards from different banks and availing free flights with miles that may help you in flying for free.
        </p>
        <div className='h6'>
        How to book flight ticket online?
        </div>
        <p>
        Booking flight tickets with EaseMyTrip is extremely hassle-free. Follow the details below for a smooth booking experience. Follow the steps mentioned:
        </p>
        <p>
        Step 1: Open EaseMyTrip and tap on the Flights tab.<br></br>
Step 2: On the top left corner, there are two tabs of One-Way and Round-Trip. Select the tab as per the preference.<br></br>
Step 3: Enter the departure point and destination point. Also, select the departure dates and return dates if looking for a round-trip. Select number of travelers traveling and the preferred class you wish to fly in.<br></br>
Step 4: Tap on the Search button. You will be redirected on the flights page, where all the details will be mentioned. All the available flights for you route will be mentioned on the next page.<br></br>
Step 5: Choose the flight that is appropriate and then tap the ‘Book Now’ option.<br></br>
Step 6: Fill in the required and apply your preferred coupon code to save money on your booking.<br></br>
Step 7: Tap ‘Continue Booking’ option and fill in the details asked.<br></br>
Step 8: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit card, Credit card, UPI, net banking, or wallet money.<br></br>
Step 9: Once the payment is done, you will receive an Email and SMS for the same. You will also receive your e-ticket on mobile and email ID.Booking flight tickets with EaseMyTrip is easy and hassle free. Our aim is to make the travel experience easy for our customers. Don’t wait for the last moment, book your flight tickets to get best deals. <br></br>
        </p>
   </div>


   <div className='footer px-5 py-2'>
    <div className='f1 mt-5 '>
     <div className='h6'>OUR PRODUCTS</div>
     <ul>
      <li>Book Flights</li>
      <li>Refer and Earn </li>
      <li>Flight Status</li>
      <li>Search Hotels</li>
      <li>Trains</li>
      <li>PNR status</li>
      <li>Lowest Airfare Calender</li>
      <li>Domestic Flights</li>
      <li>International Flights</li>
      <li>Holiday Packages</li>
      <li>Bus</li>
      <li>Cabs</li>
      <li>Franches</li>
      <li>Mice</li>
     </ul>
     </div>
    <div className='f1 mt-5'> 
    <div className='h6'>EMT INFO</div>
     <ul>
      <li>Privacy Policy</li>
      <li>Tearms And condition</li>
      <li>User assaignment</li>
      <li>Investor Relation</li>
      <li>Mobile App</li>
      <li>Achievements</li>
      <li>Carrer</li>
      <li>About us</li>
      <li>Contact us</li>
      <li>No convienence fee</li>
      <li>Free Flight Canclellation</li>     
     </ul>
    </div>
    <div className='f1 mt-5'>
    <div className='h6'>OUR PRODUCTS</div>
     <ul>
     <li>flight by city</li>
        <li>holidays</li>
        <li>Airlience</li>
        <li>Airports</li>
        <li>flght schedult</li>
        <li>train routes</li>
        <li>bus routes</li>
        <li> hotel directory</li>
        <li> travel gudie</li>
        <li>Blog</li>
        <li>travel updates</li>
        <li>Sitemap</li>
        <li>Flight orders</li>
     </ul>
     </div>
    <div className='f1 mt-5'> 
    <div className='h6'>AIRLINE OFFERS</div>
     <ul>
        <li>indigo airlines</li>
        <li>Air india airlines</li>
        <li>GO FIRST airlience</li>
        <li>vistara airlience</li>
        <li>spicejet airlience</li>
        <li>air asia airlience</li>
        <li>british airlience</li>
        <li>quater airlience</li>
        <li> singapore airlience</li>
        <li> etihad airlience</li>
        <li> united Airlience</li>
        <li> thai airlience</li>
        <li> American airlience</li>
        <li> malasiya airlience</li>
     </ul>
    </div>
    <div className='f1 mt-5'>
    <div className='h6'>PAYMENT MODE</div>
     </div>
    <div className='f1 mt-5'>
      <div className='h6'>DOWNLOAD EASYMYTRIP APP</div>
    </div>
   </div>

   <div className='Copyright px-5 py-3 m-0 p-0'>
    <p className='m-0 p-0 text-white'>Copyright © 2023 EaseMyTrip</p>
   </div>

    </>
  )
}

export default Home
