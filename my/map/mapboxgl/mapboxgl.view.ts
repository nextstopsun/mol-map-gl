namespace $.$$ {

	export class $my_map_mapboxgl extends $.$my_map_mapboxgl {

		static api() {
			return $mol_import.script( `https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js`).mapboxgl
		}

		@ $mol_mem
		api(next? : any , force? : $mol_mem_force) : any {

			const mapboxgl = $my_map_mapboxgl.api()
			
			mapboxgl.accessToken = this.accessToken()
			
			const api = new mapboxgl.Map( {
				container: this.dom_node().id,
				style: this.style(),
				center : this.center(),
				zoom : this.zoom(),
				antialias : this.antialias(),
			} )

			api.on('moveend', ( event : any )=> {
				this.update( event )
				
				// new $mol_after_frame( $mol_fiber_root( ()=> {
				// 	this.update( event )
				// } ) )
				
			} )
			
			return api
		}
		
		update( event? : any ) {
			const mapCenter = this.api().getCenter().toArray() 
			console.log(mapCenter)
			this.center(mapCenter) // Не работает
		}
		
		render() {
			const api = this.api()
			this.dom_node_actual()
		}

	}

}
