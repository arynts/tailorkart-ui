import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AgentLoginBean } from '../_bean/agentLoginBean';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AgentLoginService {

  constructor(private httpclient: HttpClient) { }

  private loginUrl='http://localhost:8090/api/login';

  public save(agentLoginBean){
    return this.httpclient.post<AgentLoginBean[]>(this.loginUrl, agentLoginBean);
  }

  public loginCheck(){
    
  }
}
