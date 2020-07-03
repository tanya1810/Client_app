import React from 'react';
import { Icon } from 'react-icons-kit'

import {ic_perm_identity, ic_phone, ic_home, ic_assignment, ic_dns, ic_create, ic_location_city, ic_domain} from 'react-icons-kit/md';
import Button from 'react-bootstrap/Button';
import Input from '../input/Input';
import './main.css';

const department=[
    'None','Animal Husbandry','BDPO','Civil Hospital','DHBVN(Rural)','DHBVN(Urban)','Distt. Town Planner',
    'Education(Elementary)','Education(Higher)','Fire Department','HVPNL','Irrigation','Nagar Parishad','PWD',
    'Public Health(Water)','Public Health(Sewage)','Public Health(Reny Well)','Social Welfare','Tehsil',
  ]
const village=[
    'None','Aatar Chahta','Aatva','Aaya Nagar','Acheja','Ajijabad','Akbarpur Dakor','Allika','Amroli','Asaavta',
    'Atoha','Baadka','Baata','Badoli','Bagpur Kala','Balayi','Bamariyaka','Bambu Nagla','Behrampur','Bela','Bharatgadh',
    'Bhavana','Bholdha','Bhued','Bilochpur','Chajju Nagar','Chandhut','Chavvan Ka Nangla','Chirwadi','Dhatir','Dostpur',
    'Faizanpur Khelda','Fatsko Nagar','Ghodi','Ghughera','Gundvas','Gurwadi','Hafzabad(Surjan Nagla)','Hidayatpur','Hoshangabad',
    'Hunsapur','Jevabad Khedli','Kakrali','Kamravali','Karimpur','Karna','Kashipur','Kulena','Kusak','Ladiyaka','Lalghad','Lalpur Kadim',
    'Lalwa','Lulwadi','Maksudpur','Mala Singh Farm','Milak Ganninki','Misa','Munirgadi','Mustafabad','Nagal Bharman','Nagliya Khurd','Nai Nagla',
    'Nandawal','Patli Khurd','Peer Gadi','Pehruka','Pelak','Prhaladpur','Rahimpur','Rajolka','Rampur Khor','Rasulpur','Raydaska','Rundhi','Sehdev Nangla',
    'Shekpur','Sheru Ka Nagla','Sihaul','Soldha','Sujwadi','Sultanpur','Sunheri Ka Nagla','Tappa','Taraka','Tekri Gujjar','Thantari','Yadupur','Zhuppa',
  ]

const numb=['None',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10,21,21,22,23,24,25,26,27,28,29,30,31];  

const info=[
    {
        a:'Name',
        b:ic_perm_identity,
    },
    {
        a:'Phone',
        b:ic_phone,
    },
    {
        a:'House No.',
        b:ic_home,
        
    },
    {
        a:'Colony',
        b:ic_location_city,
    },  
]

const info1=[
    {
        a:'Ward Number',
        b:ic_dns,
    },
    {
        a:'Village',
        b:ic_dns,
    },
    {
        a:'Department',
        b:ic_assignment,
    },
    {
        a:'Details of the Issue',
        b:ic_create,
    }, 
]

const coll=info.map((specs)=>{
    return (
        <div className='tc bg-gray dib br3 pa3 ma2 grow bw2 shadow-5'>       
            <Icon size={32} icon={specs.b}/>
            <Input info={specs.a}/>                        
            <br/>
        </div>
    );
})

const call=numb.map((data0)=>{    
    return( 
        <div>
            <p class="dropdown-item">{data0}</p>
        </div>       
    );
})

const call1=department.map((data)=>{  
    return( 
        <div>
            <p class="dropdown-item">{data}</p>
        </div>       
    );
})

const call2=village.map((data1)=>{    
    return( 
        <div>
            <p class="dropdown-item">{data1}</p>
        </div>       
    );
})



const Main=()=>{   

        return(
            <div>                
                <div className='box'>                
                    {coll}
                    <div className='tc bg-gray dib br3 pa3 ma2 bw2 shadow-5'>       
                        <Icon size={32} icon={info1[0].b}/>
                        <div class="btn-group dropright">
                            <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                                    </div>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={info1[0].a}/>
                            </div>
                            <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">{info1[0].a}</span>
                            </button>
                            <div class="dropdown-menu dropdown-primary force-scroll">
                                {call}
                            </div>                                         
                        </div>                          
                        <br/>
                    </div>

                    <div className='tc bg-gray dib br3 pa3 ma2 bw2 shadow-5'>       
                        <Icon size={32} icon={info1[1].b}/>
                        <div class="btn-group dropright">
                            <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-default"></span>
                                    </div>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={info1[1].a}/>
                            </div>
                            <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">{info1[1].a}</span>
                            </button>
                            <div class="dropdown-menu dropdown-primary force-scroll">
                                {call2}
                            </div>                                         
                        </div>                          
                        <br/>
                    </div>

                    <div className='tc bg-gray dib br3 pa3 ma2 bw2 shadow-5'>       
                        <Icon size={32} icon={info1[2].b}/>
                        <div class="btn-group dropright">
                            <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-sizing-default"></span>
                                        </div>
                                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={info1[2].a}/>
                            </div>
                            <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">{info1[2].a}</span>
                            </button>
                            <div class="dropdown-menu dropdown-primary force-scroll">
                                {call1}
                            </div>                                         
                        </div>                      
                        <br/>
                    </div>

                    <div className='tc bg-gray dib br3 pa3 ma2 grow bw2 shadow-5'>       
                        <Icon size={32} icon={info1[3].b}/>
                        <Input info={info1[3].a}/>                        
                        <br/>
                    </div>
                    <div className='button'>
                    <button type="button" class="btn btn-dark btn-xl">Submit</button>
                    </div>

                </div>
            </div>
        );
   
}

export default Main;