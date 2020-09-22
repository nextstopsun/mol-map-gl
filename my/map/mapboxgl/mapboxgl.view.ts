namespace $.$$ {

	export class $my_map_mapboxgl extends $.$my_map_mapboxgl {

		static fetchResoures() {
			$mol_import.style( `https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css`)
			return $mol_import.script( `https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js`).mapboxgl
		}

		/*
		constructor(
			public style : ()=> void ,
			public center : ()=> void ,
			public zoom : ()=> void ,
			public antialias : ()=> void ,
		) {
			super()
			$mol_import.style( `https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css`)
			const mapboxgl = $mol_import.script( `https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js`).mapboxgl
			mapboxgl.accessToken = this.accessToken()
			
			const api = new mapboxgl.Map( {
				container: this.dom_node().id,
				style: this.style,
				center : this.center,
				zoom : this.zoom,
				antialias : this.antialias,
			} )

			api.on('moveend', ( event : any )=> {
				this.update( event )
			} )

			return api
		}
		 */
		
		
		@ $mol_mem
		map(next? : any , force? : $mol_mem_force) : any {
			
			const mapboxgl = $my_map_mapboxgl.fetchResoures()
			
			mapboxgl.accessToken = this.accessToken()
			
			const map = new mapboxgl.Map( {
				container: this.dom_node().id,
				style: this.style(),
				center : this.center(),
				zoom : this.zoom(),
				antialias : this.antialias(),
			} )

			map.on('moveend', ( event : any )=> {
				this.update( event )
				
				// new $mol_after_frame( $mol_fiber_root( ()=> {
				// 	this.update( event )
				// } ) )
				
			} )
			
			return map
		}
		
		
		update( event? : any ) {
			const mapCenter = this.map().getCenter().toArray() 
			console.log(mapCenter)
			this.center(mapCenter) // Вызывает render!
		}
		
		render() {
			console.log('render!')
			const map = this.map() // Каждый раз добавляет DOM элементы
			this.dom_node_actual()
		}

	}

}
