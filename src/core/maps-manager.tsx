import React from "react";
import { Link } from "react-router-dom";
import ConnectionService from "../services/connectionService";
import { MapInfo } from "./dto";

export class MapsManager extends React.Component {
  private readonly httpC = new ConnectionService();
  private mapsInfos: MapInfo[] = [];

  render() {
    return (
      <div className="offset-2 col-4">
        <Link to='map-editor' className="btn btn-success mt-3">Novo mapa</Link>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>area01</td>
              <td>
                <Link to='map-editor/1' type="button" className="offset-1 btn btn-success">Editar</Link>
                <a href="" type="button" className="btn btn-danger">Excluir</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>area02</td>
              <td>
                <a href="" type="button" className="offset-1 btn btn-success">Editar</a>
                <a href="" type="button" className="btn btn-danger">Excluir</a>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>area03</td>
              <td>
                <a href="" type="button" className="offset-1 btn btn-success">Editar</a>
                <a href="" type="button" className="btn btn-danger">Excluir</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}