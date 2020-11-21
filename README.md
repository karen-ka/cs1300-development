# README

## Organization of components
- There are 4 major components used in this project
    - Grid: which acts as the parent and layout container
        - Using Ant Design's Layout components, it contains a sidebar and content section.
    - Card: holds the info for each item
        - The same card component is reused for rendering the display grid and cards in the team drawer.
    - SelectorGroup: filter and sorting buttons on the sidebar
    - Drawer: opens the side modal showing the user's current team

## How data is passed down
- All data flows down from Grid, and is passed down to child through props.
- Childs responsible for data changes have access to the parent's setState or handler method to change the state.

## How the user triggers state changes
- Clicks on child components are registered by those components.
- The click triggers a handler method, which registers the click's data, makes data modifications as necessary and sends the changes to the parent component so it can update any other components if needed.