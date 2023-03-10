import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-s.jpg"
            leftbtnText="Custom Order"
            rightbtnText="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-y.jpg"
            leftbtnText="Custom Order"
            rightbtnText="Existing Inventory"
        />
        <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-x.jpg"
            leftbtnText="Custom Order"
            rightbtnText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundimg="model-3.jpg"
            leftbtnText="Custom Order"
            rightbtnText="Existing Inventory"
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back gurantee"
            backgroundimg="solar-panel.jpg"
            leftbtnText="Order now"
            rightbtnText="learn More"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roofs Costs less than New Roofs plus Solar Panels"
            backgroundimg="solar-roof.jpg"
            leftbtnText="Order now"
            rightbtnText="learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundimg="accessories.jpg"
            leftbtnText="Shop now"
            rightbtnText=""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`