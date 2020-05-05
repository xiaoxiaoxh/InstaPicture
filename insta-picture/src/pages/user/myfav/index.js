import React from 'react';
import {connect} from "react-redux";
import { Modal} from 'antd-mobile';
import config from '../../../assets/js/conf/config.js';
import {safeAuth,lazyImg} from '../../../assets/js/utils/util.js';
import UpRefresh from '../../../assets/js/libs/uprefresh.js';
import {request} from '../../../assets/js/libs/request.js';
import SubHeaderComponent from '../../../components/header/subheader';
import Css from '../../../assets/css/user/myfav/index.css';
import PersonalPage from "./homePage/index"
class  MyFav extends React.Component{
    constructor(props){
        super(props);
        safeAuth(props);
        this.state = {
            aGoods:[]
        }
        this.bScroll=true;
        this.oUpRefresh=null;
        this.curPage=1;
        this.maxPage=0;
        this.offsetBottom=100;
    }
    componentWillUnmount(){
        this.oUpRefresh=null;
        this.setState=(state,callback)=>{
            return;
        }
    }
    pushPage(url){
        this.props.history.push(config.path+url);
    }
    render(){
        return(
            <div>
                <div className={Css['page']}>   
                <SubHeaderComponent title="我的主页"></SubHeaderComponent>
                <PersonalPage />
                </div>
              
            </div>
            
        );
    }
}
export default connect((state)=>{
    return{
        state:state
    }
})(MyFav)