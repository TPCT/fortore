import './App.css';
import Header from "./Compontents/Header/header";
import Map from "./Compontents/Map/map";
import Modal from "./Compontents/Modal/modal";

function App() {
    const data = {
        main: [
            'مشاريعنا',
            'الاستثمار العقاري',
            'التكنولوجيا الحديثة',
            'الاغذية و المشروبات',
            'جمال و ازياء',
            'براءة اختراع'
        ],
        projects: [
            'شارع9',
            'فورتوري مول الرياض',
            'بوابة الأكل',
            'فورتوري مول حايل',
            'برج السيف',
            'فندق فورتوري',
            'رياض جاردن',
            'مطعم نوماد',
            'مطعم أوفردوز',
            'مطعم نور',
            'مطعم مندي رواف',
            'مطعم سلطاني بالاس',
            'مطعم بلخمس',
            'مطعم أوفيري جامباس (جنيف)'
        ]
    }

      return (
          <div style={{position: "relative"}}>
              <Header></Header>
              <section className="main-container">
                  <Map id='main' content={data.main} level_back={null} next={['projects', 'real-state',
                      'technology', 'nutrients', 'fashion', 'patent']} back={null} hidden={false}></Map>
                  <Map id='projects' content={data.projects} next={['street-9']} hidden={true} back="main"></Map>
                  <Modal id="street-9" hide={true} back="projects"></Modal>
                  {/*/!*<Map id='main4' content={data.main} next_ids={'projects',*!/*/}
                  {/*/!*    'real-estate', 'technology', 'nutrients', 'fashionz', 'patent'*!/*/}
                  {/*/!*} zoom_level={1}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.projects}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.invests}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.techs}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.food}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.clothes}></Map>*!/*/}
                  {/*/!*<Map id={data.main.nextIds.invent}></Map>*!/*/}
              </section>
          </div>
      );
}

export default App;
