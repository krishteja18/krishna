/* eslint-disable no-return-assign */
import React, { Fragment } from 'react';
import Chart from "react-google-charts";
import { connect } from 'react-redux';
import { Layout, Form } from 'antd';


import * as localConsts from './chartConsts';
import localStyles from './chart.less';


const { Content } = Layout;

class  chartView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    
      key:"Indices"
    };
  }

 
  handleClick=(e)=>{
    console.log(e,"val")
    this.setState({key:e})



  }

  render() {
   const jsonData={"Indices":[{"year":"2013","sales":"600"},{"year":"2014","sales":"900"},{"year":"2015","sales":"1000"},
{"year":"2016","sales":"600"},{"year":"2017","sales":"800"}],


"Currencies":[{"year":"2013","sales":"800"},{"year":"2014","sales":"1000"},{"year":"2015","sales":"900"},{"year":"2016","sales":"700"},{"year":"2017","sales":"900"}],

"Futures":[{"year":"2013","sales":"900"},{"year":"2014","sales":"800"},{"year":"2015","sales":"650"},{"year":"2016","sales":"900"},{"year":"2017","sales":"800"}],
"Crypto":[{"year":"2013","sales":"700"},{"year":"2014","sales":"600"},{"year":"2015","sales":"700"},{"year":"2016","sales":"800"},{"year":"2017","sales":"700"}],
"Bonds":[{"year":"2013","sales":"1000"},{"year":"2014","sales":"900"},{"year":"2015","sales":"1000"},{"year":"2016","sales":"800"},{"year":"2017","sales":"900"}],



}
const keys=Object.keys(jsonData)

const data=jsonData[`${this.state.key}`].map(obj=>[obj.year,Number(obj.sales)])
const innerKeys=Object.keys(jsonData[`${keys[0]}`][0])
data.unshift([innerKeys[0],innerKeys[1]])



    

    return (
<Fragment>
        <Layout>
          


    
          <Content>
            <div className={localStyles.rolesContentDiv}>
            <div className={localStyles.flex}>{keys.map(key=><div className={this.state.key==key?localStyles.highlight:""} value={key} onClick={()=>this.handleClick(key)}>{key}</div>)}</div>
            <Chart
    style={{marginTop:"70px"}}
  width={'1300px'}
  height={'500px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={data
  //   
  //   ['Year', 'Sales'],
  //   ['2013', 1000],
  //   ['2014', 1170],
  //   ['2015', 660],
  //   ['2016', 1030],
  // ]
}
  options={{
   
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>
            
            </div>
          </Content>
        </Layout>
      </Fragment>
    );
  }



  
}

export default (connect(({ chart }) => ({ chart }))(chartView));
