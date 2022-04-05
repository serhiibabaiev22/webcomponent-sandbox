import { Component, ComponentDidLoad, ComponentInterface, h, Host, Prop, State } from '@stencil/core';
import { VehicleApiService, Vehicle } from './vehicle-api.service';

@Component({
  tag: 'vehicle-list',
  styleUrl: 'vehicle-list.scss',
  shadow: true,
})
export class VehiclesList implements ComponentInterface, ComponentDidLoad {
  private itemsPerPage = 10;
  private offset = 0;
  private pokeApiService = new VehicleApiService();

  @State() private vehicles: Vehicle[];
  @State() private vehiclesCount: number;

  /** The title of this Vehicle List. */
  @Prop() listTitle = 'Vehicle List';

  componentDidLoad(): void {
    this.loadPage();
  }

  private loadPage(): void {
    this.pokeApiService.loadPage(this.offset, this.itemsPerPage).then(response => {
      this.vehicles = response.results;
      this.vehiclesCount = response.count;
    });
  }

  // Add the following method
  private handlePaging(paging: { offset: number }): void {
    this.offset = paging.offset;
    this.loadPage();
  }

  render() {
    return (
      <Host>
        <header>
          <h2>{this.listTitle}</h2>
        </header>

        {this.vehicles && this.vehicles.length ? (
          <div>
            <p>There are {this.vehiclesCount} vehicles in the database.</p>
            <p>Here are the next {this.vehicles.length}.</p>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {this.vehicles.map(vehicle => (
                  <tr>
                    <td>{vehicle.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <list-pagination count={this.vehiclesCount} offset={this.offset} itemsPerPage={this.itemsPerPage} onPaging={event => this.handlePaging(event.detail)} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Host>
    );
  }
}
