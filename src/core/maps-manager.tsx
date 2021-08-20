import React from "react";
import { Link } from "react-router-dom";
import ConnectionService from "../services/connectionService";
import { BattlefieldMap, MapInfo } from "./dto";

export class MapsManager extends React.Component {
  private readonly httpC = new ConnectionService();
  private mapsInfos: BattlefieldMap[] = [];
  private table = <div></div>;

  componentDidMount(): void {
    this.httpC.listMaps().then(m => {
      this.mapsInfos = m!.data!;
      console.log(m)
      this.createTable();
      this.setState({});
    });
  }

  deleteMap(id: string): void {
    this.httpC.deleteMap(id);
  }

  createTable():void {
    const trs: JSX.Element[] = []    
    this.mapsInfos.forEach(m => {
      trs.push(
        (<tr>
          <th scope='row'>{m._id}</th>
          <td>
            <Link to={`map-editor/${m._id}`} type="button" className="offset-1 btn btn-success">Editar</Link>
            <button onClick={()=> this.deleteMap(m._id!)} type="button" className="btn btn-danger">Excluir</button>
          </td>
        </tr>
        )
      );
    });

    this.table = (
    <div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="offset-2 col-4">
        <Link to='map-editor' className="btn btn-success mt-3">Novo mapa</Link>
        {this.table} 
      </div>
    );
  }
}