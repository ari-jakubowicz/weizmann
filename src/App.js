import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Grid, Typography, Paper, Button, TextField, Modal} from '@mui/material'
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import CountUp from 'react-countup'

function App() {

  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="body">
        <div className="title">
          <h1>
            מאמרי 10
          </h1>
        </div>
        <div className="kpis-board">
          <KpisBoard></KpisBoard>
        </div>
        <div className="articles">
          <ArticlesGrid></ArticlesGrid>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "#00c3d5 !important",
  }
});

const useStyles2 = makeStyles({
  root: {
    textAlign: "center",
    padding: 15,
    backgroundColor: "#07071f !important",
  }
});

function Header() {
  const details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  
  return (
    <>
      <div className={!isMobileDevice ? "upper-header" : "upper-header-mobile"}>
        {
          !isMobileDevice ? 
            <Grid sx={{ display: "flex", alignItems: "center", height: "100%", width: "100%", padding: "0 15vw", justifyContent: "space-between" }}>
              <Grid item>
                <Button> About </Button>
              </Grid>
              <Grid item>
                <img style={{height: "40px", width: "170px"}} src='./10klogo.png'></img>
              </Grid>
              <Grid sx={{display: "flex"}} item>
                <img style={{height: "30px", width: "200px"}} src='./weizlogo.png'></img>
              </Grid>
            </Grid>
            :
            (
              <Grid sx={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center"}} item>
                <img style={{height: "30px", width: "200px"}} src='./weizlogo.png'></img>
              </Grid>
            )
        }
      </div>
      <Grid className="lower-header">
        {
          !isMobileDevice ? 
          (
            <ul className="header-menu">
              <li>החשבון שלי</li>
              <li>שעלות ותשובות</li>
              <li className="selected">מאמרי 10</li>
              <li>דוחות לדוגמה</li>
              <li>מידע למשתתפים הרשומים </li>
            </ul>
          ) :
          (
            <Grid sx={{backgroundColor: "#07071f", height: "100%", alignItems: "center", display: "flex", justifyContent: "space-between"}}>
              <Sidebar></Sidebar>
              <img style={{height: "40px", width: "170px"}} src='./10klogo.png'></img>
            </Grid>
          )
        }
      </Grid>
    </>
  )
}


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          marginLeft: "10px",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer" // add cursor pointer to indicate it's clickable
        }}
        onClick={toggleSidebar} // add onClick event to toggle the sidebar
      >
        <img style={{ width: "30px", height: "30px" }} src="./sandwich.png" alt="sandwich" />
      </div>

      {isOpen && 
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "white", position: "fixed", top: "180px" }}>
          <div className="header-menu-mobile">
            <ul style={{width: "100%", margin: "0px"}}>
              <li>מידע למשתתפים הרשומים </li>
              <li>דוחות לדוגמה</li>
              <li>מאמרי 10</li>
              <li>שעלות ותשובות</li>
              <li style={{color: "#00c3d5"}}>החשבון שלי</li>
            </ul>
            <Button style={{backgroundColor: "#00c3d5", color: "#07071f", width: "80vw", fontSize: "24px"}}>
              K10 הכול על 
            </Button>
          </div>
        </div>
      }
    </>
  );
}

function KpisBoard() {  
    
  function AnimatedKpiGrid2() {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setShow(true);
    }, []);
  
    return (
      <Grid
        container
        sx={{
          backgroundColor: "#00c3d5",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.5s ease-out, transform 1s ease-out",
        }}
      >
        <Grid item sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img style={{ height: "80px", width: "30px" }} src="./female.png"></img>
          <div style={{ fontSize: "28px", fontWeight: "100" }}>4272</div>
          <div style={{ fontSize: "10px" }}> נשים משתתפות </div>
        </Grid>
        <Grid xs={6} item sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img style={{ height: "80px", width: "30px" }} src="./male.png"></img>
          <div style={{ fontSize: "28px", fontWeight: "100" }}>3302</div>
          <div style={{ fontSize: "10px" }}> גברים משתתפים </div>
        </Grid>
      </Grid>
    );
  }

  function AnimatedKpiGrid3() {
    return (
      <Grid item xs={6} md={3}>
        <Grid sx={{
          backgroundColor: "#07071f !important", 
          height: "100%", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
        }}>
          <div style={{borderRadius: "50%", border: "3px solid white", width: !isMobileDevice ?  "130px" : "80px", height: !isMobileDevice ? "130px" : "80px", backgroundColor: "#00c3d5", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{fontSize: !isMobileDevice ? '36px' : '28px', fontWeight: '100'}}>
              <CountUp end={8029} />
            </div>
            <div style={{fontSize: "10px"}}> משתתפים במחקר עד כה </div>
          </div>
          <div style={{fontSize: !isMobileDevice ? "12px" : "10px", color: "white", marginTop: "10px"}}> מספר היעד הוא 10000 </div>
        </Grid>
      </Grid>
    )
  }
  
  
    
  const details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);


    
    return (
      <div style={{ height: "35vh", minHeight: "100px", display: "flex", flexDirection: "column" }}>
        <Grid className="kpis" container spacing={2} style={{ flex: "1" }}>
          <Grid item xs={12} md={6}>
            <KpiGrid></KpiGrid>
          </Grid>
          <Grid item xs={6} md={3}>
            {
              !isMobileDevice ? (
                <AnimatedKpiGrid2></AnimatedKpiGrid2>
              ) : 
              (
                <Grid sx={{backgroundColor: "#00c3d5", height: "100%", justifyContent: "center", alignItems: "center", gap: "10px"}} container>
                  <Grid item sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div>
                      <div style={{fontSize: '28px', fontWeight: '100'}}>4272</div>
                      <div style={{fontSize: "10px"}}> נשים משתתפות </div>
                    </div>
                    <img style={{height: "60px", width: "30px"}} src="./female.png"></img>
                  </Grid>
                  <Grid xs={6} item sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div>
                      <div style={{fontSize: '28px', fontWeight: '100'}}>3302</div>
                      <div style={{fontSize: "10px"}}> גברים משתתפים </div>
                    </div>
                    <img style={{height: "60px"}} src="./male.png"></img>
                  </Grid>
                </Grid>
              )
            }
          </Grid>
          <AnimatedKpiGrid3></AnimatedKpiGrid3>
        </Grid>
      </div>
  )
}

function KpiGrid() {

  const details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShow(true);
  }, []);


  return (
    
    <Grid container sx={!isMobileDevice ? {
        backgroundColor: '#00c3d5', 
        color: '#07071f', 
        padding: 2, 
        height: "100%",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.5s ease-out, transform 1.3s ease-out",
      } : 
      {
        backgroundColor: '#00c3d5', 
        color: '#07071f', 
        padding: 2, 
        height: "100%",
      }
      }>
      { 
        !isMobileDevice ? (
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center", gap: "10px"}}>
          <Grid sx={{display: "inline-block"}}>
            <div style={{fontSize: '28px', fontWeight: '100'}}>235616</div>
            <div style={{fontSize: '10px'}}>ארוחות מתועדות</div>
          </Grid>
            <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: "30px", width: "20px"}} src="./cellphone.png">
              </img>
            </div>
          </Grid>
        ) : (
        <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px"}}>
          <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{height: "30px", width: "20px"}} src="./cellphone.png">
            </img>
          </div>
          <Grid sx={{display: "inline-block"}}>
            <div style={{fontSize: '28px', fontWeight: '100'}}>235616</div>
            <div style={{fontSize: '10px'}}>ארוחות מתועדות</div>
          </Grid>
          </Grid>
        )
      }
      {
        !isMobileDevice ? 
          (<Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center", gap: "10px"}}>
            <Grid sx={{display: "inline-block"}}>
              <div style={{fontSize: '28px', fontWeight: '100'}}>15238</div>
              <div style={{fontSize: '10px'}}>שאלונים שמולאו</div>
            </Grid>
            <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: "30px", width: "25px"}} src="./notepad.png">
              </img>
            </div>
          </Grid>)
        :
        (
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px"}}>
            <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: "30px", width: "25px"}} src="./notepad.png">
              </img>
            </div>
            <Grid sx={{display: "inline-block"}}>
              <div style={{fontSize: '28px', fontWeight: '100'}}>15238</div>
              <div style={{fontSize: '10px'}}>שאלונים שמולאו</div>
            </Grid>
          </Grid>
        )
      }
      {
        !isMobileDevice ? ( 
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center", gap: "10px"}}>
            <Grid sx={{display: "inline-block"}}>
              <div style={{fontSize: '28px', fontWeight: '100'}}>955000</div>
              <div style={{fontSize: '10px'}}>בדיקות דם שהועלו</div>
            </Grid>
            <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: "30px", width: "30px"}} src="./bloodtest.png">
              </img>
            </div>
          </Grid>
        ) : 
        (
          <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: "10px"}}>
            <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: "30px", width: "30px"}} src="./bloodtest.png">
              </img>
            </div>
            <Grid sx={{display: "inline-block"}}>
              <div style={{fontSize: '28px', fontWeight: '100'}}>955000</div>
              <div style={{fontSize: '10px'}}>בדיקות דם שהועלו</div>
            </Grid>
          </Grid>
        )
      }
      {
      !isMobileDevice ? (
        <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center", gap: "10px"}}>
          <Grid sx={{display: "inline-block"}}>
            <div style={{fontSize: '28px', fontWeight: '100'}}>37000</div>
            <div style={{fontSize: '10px'}}>ימי תיעוד מחיישני רמת הסוכר</div>
          </Grid>
          <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{height: "30px", width: "30px"}} src="./diabetes.png">
            </img>
          </div>
        </Grid>
      ) : 
      (
        <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: "10px"}}>
          <div style={{width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{height: "30px", width: "30px"}} src="./diabetes.png">
            </img>
          </div>
          <Grid sx={{display: "inline-block"}}>
            <div style={{fontSize: '28px', fontWeight: '100'}}>37000</div>
            <div style={{fontSize: '10px'}}>ימי תיעוד מחיישני רמת הסוכר</div>
          </Grid>
        </Grid>
      )
      } 
    </Grid>
  );
}

function ArticlesGrid() {

  const loginModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30vw",
    backgroundColor: 'white',
  };

  
  const [openLogInModal, setOpenLoginModal] = React.useState(false);
  const handleOpen = () => setOpenLoginModal(true);
  const handleClose = () => setOpenLoginModal(false);

  const articles = [
    {
      title: 'Scientists discover new species of dinosaur in Patagonia',
      imageSrc: './science1.png',
      description: "Researchers have identified a new species of dinosaur after analyzing fossils found in Argentina's Patagonia region. The species, named Llukalkan aliocranianus, is thought to have roamed the Earth about 80 million years ago",
      date: '19/7/2022'
    },
    {
      title: 'Study suggests eating fish may lower risk of depression',
      imageSrc: './science2.png',
      description: 'A new study has found that people who consume fish regularly may have a lower risk of developing depression. Researchers analyzed data from more than 100,000 people and found that those who ate two or more servings of fish per week had a 17% lower risk of depression',
      date: '19/7/2022'
    },
    {
      title: "NASA's Mars rover collects first rock sample",
      imageSrc: './science3.png',
      description: "NASA's Perseverance rover has collected its first rock sample on Mars. The sample, which is about the size of a piece of chalk, will be studied to help scientists understand the geology and history of the planet",
      date: '19/7/2022'
    },
    {
      title: 'Scientists discover new way to convert carbon dioxide into jet fuel',
      imageSrc: './science4.png',
      description: 'Researchers at Stanford University have developed a new way to convert carbon dioxide into jet fuel. The process involves using copper catalysts to turn carbon dioxide into ethanol, which can then be converted into jet fuel',
      date: '19/7/2022'
    },
    {
      title: 'New study finds link between air pollution and dementia',
      imageSrc: './science5.png',
      description: 'A new study has found a link between exposure to air pollution and an increased risk of developing dementia. The study, which analyzed data from more than 130,000 people, found that those who lived in areas with high levels of air pollution were more likely to develop dementia',
      date: '19/7/2022'
    },
    {
      title: 'Scientists create first human-monkey chimera embryos',
      imageSrc: './science6.png',
      description: 'Researchers have successfully created embryos that contain both human and monkey cells. The goal of the research is to create animal models for studying human diseases and developing new treatments',
      date: '19/7/2022'
    },
    {
      title: 'Study suggests water on Mars may have been habitable',
      imageSrc: './science7.png',
      description: "A new study has found that the water on Mars may have been habitable for microbial life in the past. The study analyzed data from NASA's Curiosity rover and found evidence that the water on Mars was not too acidic or salty to support life",
      date: '19/7/2022'
    },
    {
      title: 'Scientists create first 3D-printed heart using human tissue',
      imageSrc: './science8.png',
      description: "Researchers have created the world's first 3D-printed heart using human tissue. The heart was created using a patient's own cells, which were grown into heart tissue and then printed using a specialized 3D printer",
      date: '19/7/2022'
    },
    {
      title: 'New study suggests dogs can detect COVID-19 with high accuracy',
      imageSrc: './science9.png',
      description: 'A new study has found that dogs can be trained to detect COVID-19 with a high degree of accuracy. The study, which involved training dogs to sniff out the virus, found that they were able to correctly identify infected individuals with an accuracy rate of up to 94%',
      date: '19/7/2022'
    },
  ];

  return (
    <Grid container spacing={5}>
      <Modal
        open={openLogInModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={loginModalStyle}>
          <form style={{display: "flex", flexDirection: "column", padding: "20px", alignItems: "center", gap: "20px"}}>
            <Typography variant="h5">
              Log In
            </Typography>
            <TextField
              label="Username"
              variant="standard"
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
            />
            <a>Forgot password?</a>
            <Button
              variant="contained"
              sx={{backgroundColor: "#07071f", width: "60%"}}
            >
              Log in
            </Button>
          </form>
        </div>
      </Modal>
      {articles.map((article, index) => (
        <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "20px"}} key={index} item xs={12} sm={6} md={4}>
          <img style={{width: "100%", height: "150px"}} src={article.imageSrc} alt={article.title} />
          <Grid sx={{display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px"}}>
            <div style={{fontWeight: "bold", textAlign: "left"}}>{article.title}</div>
            <div style={{fontSize: "14px", textAlign: "left", overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical"}}>{article.description}</div>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", borderBottom: "0.5px solid #00c3d5"}}>
              <div onClick={handleOpen} style={{borderBottom: "4px solid #00c3d5", cursor: "pointer"}}> למאמר המלא </div>
              <span> {article.date} </span>
            </div>
          </Grid>
        </Grid>
    ))}
    <Button sx={{ backgroundColor: "#00c3d5", margin: "0 auto", color: "#07071f" }}>
       מאמרים נוספים
    </Button>
  </Grid>
  )
}

function Footer() {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem", padding: "0 15vw" }}>
      <Grid sx={{display: "flex"}} item xs={12}>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "2rem", display: "flex" }}>
      </Grid>
    </Grid>
  );
}


export default App;
