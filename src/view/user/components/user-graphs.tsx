import React from 'react';
import { GraphAccess, GraphContainer, GraphItems } from "../user.styles";
import { NoData } from "../../../components/helper/no-data/no-data";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

export const UserGraphs: React.FC<any> = ({graph, total}) => {
  
  return (
    <GraphContainer>
      
      <GraphAccess>Acessos: {total}</GraphAccess>
      
      <GraphItems>
        {graph?.length === 0
          ? <NoData text={'sorry, no data'}/>
          : <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{top: 20, bottom: 20, left: 80, right: 80}}
          />
        }
      </GraphItems>
      
      <GraphItems>
        {graph?.length === 0
          ? <NoData text={'sorry, no data'}/>
          : <VictoryChart>
            <VictoryBar
              data={graph}
              alignment={"start"}
            />
          </VictoryChart>
        }
      </GraphItems>
    
    </GraphContainer>
  );
};
