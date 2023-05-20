import axios from "axios";
import { GameStatus } from "./types";

const api_url = process.env["REACT_APP_API_URL"] || "/api"; 

export async function initialize(): Promise<GameStatus>{
    var r = await axios.post<GameStatus>(api_url + "/initialize");
    return r.data;
}

export async function saveApiKey(key:string): Promise<void>{
    await axios.put<GameStatus>(api_url + "/apikey", {key: key});
}