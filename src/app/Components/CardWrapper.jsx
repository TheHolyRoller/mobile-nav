import React from 'react'

function CardWrapper() {
  return (
    <div>
      
      <Grid.Container gap={3} justify="center">
      <Grid xs={12} sm={3}>

        <Card1 />
      </Grid>
      <Grid xs={12} sm={3}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={3}>
      
      {/* Add in a conditional render here  */}
      
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <CardRenderer/>
        
        
      </Grid>
      <Grid xs={12} sm={5}>
        {/* Add in alternative Card2 here  */}
        <AlternativeCard2/> 
        
        
        
        {/* <Card5 /> */}
      </Grid>
    </Grid.Container>

      
    </div>
  );
  
}

export default CardWrapper
