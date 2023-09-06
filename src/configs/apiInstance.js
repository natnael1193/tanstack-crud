import axios from "axios";
import { baseUrl } from './baseUrl';


export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
  }
});