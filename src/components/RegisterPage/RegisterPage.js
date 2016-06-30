/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RegisterPage.scss';

const title = 'New User Registration';

class RegisterPage extends Component {

/*  static getInitialState = {
    nameError:'aaa'
  }
  static propTypes = {
    nameError: React.PropTypes.string.isRequired
  }*/
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

   constructor(props){
     super(props);

     this.state = {
       nameErr:'',
       passwordErr:'',
       rePasswordErr:'',
       telErr:'',
       emailErr:'',
       dateErr:'',
       errMessage:'',
       user:{
         'name':'',
         'password':'',
         'repassword':'',
         'tel':'',
         'email':'',
         'date':''
       }
     }
   }
    handleAuthorChange =(e) => {
      var value = e.target.value;
      if(value.length <=0){
        this.setState({nameErr:'用户名不能为空'})
        document.getElementById('username').focus();
      } else {
        this.setState({nameErr:''})
        this.setState({user:{name:value}})
      }
    }

    handlePasswordChange =(e) => {
      var value = e.target.value;
      if(value.length <=0){
        this.setState({passwordErr:'密码不能为空'});
        document.getElementById('password').focus();
      } else {
        this.setState({passwordErr:''})
        this.setState({user:{password:value}})
      }
    }
    handleRepasswordChange = (e) => {
      var value = e.target.value;
      console.log(this.state.user.password);
      if(value != this.state.user.password){
        this.setState({rePasswordErr:'你输入的密码不一致'});
        document.getElementById('repassword').focus();
      } else {
        this.setState({rePasswordErr:''})
        this.setState({user:{rePasswordErr:value}})
      }
    }
    handleTelChange = (e) => {
      var value = e.target.value;
      if(value.length <=0 || value > 11){
        this.setState({telErr:'电话号码不能为空'})
        document.getElementById('tel').focus();
      } else {
        this.setState({telErr:''})
        this.setState({user:{tel:value}})
      }
    }
    handleEmailChange = (e) => {
      var value = e.target.value;
      if(value.length <=0){
        this.setState({emailErr:'邮箱的格式不对'})
        document.getElementById('email').focus();
      } else {
        this.setState({emailErr:''})
        this.setState({user:{email:value}})
      }
    }
    handleDateChange = (e) => {
      var value = e.target.value;
      if(value.length <=0){
        this.setState({dateErr:'出生日期不能为空'})
        document.getElementById('date').focus();
      } else {
        this.setState({dateErr:''})
        this.setState({user:{date:value}})
      }
    }
    handleSubmit = (e) =>{

      if(this.state.user.name ==''|| this.state.user.password == '' || this.state.user.repassword==''|| this.state.user.tel ==''|| this.state.email == ''|| this.state.date == ''){
       this.setState({errMessage:'你有未填写的信息'});
        return false;
      }
    }
  render() {


    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <form className={s.register} onSubmit={this.handleSubmit}>
            <div>
              <span className={s.errMessage}>{this.state.errMessage}</span>
            </div>
            <div className={s.formGroup}>
              <input type="text" name="username" id="username"  className={s.formControl} placeholder="用户名"  onBlur={this.handleAuthorChange}/>
              <span className={s.errMessage}>{this.state.nameErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="password" id="password" className={s.formControl} placeholder="密码" onBlur={this.handlePasswordChange} />
              <span className={s.errMessage}>{this.state.passwordErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="password" id="repassword" className={s.formControl} placeholder="重复密码" onBlur={this.handleRepasswordChange}/>
              <span className={s.errMessage}>{this.state.rePasswordErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="text" id="tel" className={s.formControl} placeholder="手机号" onBlur={this.handleTelChange}/>
              <span className={s.errMessage}>{this.state.telErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="email" id="email" className={s.formControl} placeholder="邮箱" onBlur={this.handleEmailChange}/>
              <span className={s.errMessage}>{this.state.emailErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="date" id="date" className={s.formControl} placeholder="出生日期" onBlur={this.handleDateChange}/>
              <span className={s.errMessage}>{this.state.dateErr}</span>
            </div>
            <div className={s.formGroup}>
              <input type="reset" className={s.resetBtn} value="重置"/>
              <input type="submit" className={s.registerBtn} value="注册" />
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default withStyles(RegisterPage, s);
