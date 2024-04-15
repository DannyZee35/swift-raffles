import { DivineSociety } from "./DivineSociety";
import { Box  } from "@chakra-ui/react"
import { SwiftTech } from "./SwiftTech";





export const ManagementData =({ current })=>{
    if (current === "Divine Society") {
        return (
        <Box sx={{width: "100%", marginRight:"30px",
        "@media screen and (max-width: 400px)": {
          marginRight:"0px",
    
       },
      }} 
        
        > 
          <DivineSociety/>

        </Box>
       
        );
      }
      if (current === "Swift Tech") {
        return (
        <Box sx={{width: "100%", marginRight:"30px",
        "@media screen and (max-width: 400px)": {
          marginRight:"0px",
    
       },
      }} 
        
        > 
          <SwiftTech/>

        </Box>
       
        );
      }
      return <div>Not Found</div>;

}