import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { DynamicComponentComponent } from 'src/app/dynamic-component/dynamic-component.component';
import {Portal,ComponentPortal,TemplatePortal} from '@angular/cdk/portal';
import { OverlayConfig,Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'app-dynamic-presentation',
  templateUrl: './dynamic-presentation.component.html',
  styleUrls: ['./dynamic-presentation.component.css']
})
export class DynamicPresentationComponent implements OnInit {

  
  @ViewChild('dynamic', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @ViewChild('templatePortalContent',{static: true}) templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponentComponent>
  templatePortal: TemplatePortal<any>
  numberToWord

  private componentRef: any;
  constructor(private resolver: ComponentFactoryResolver,public overlay: Overlay,public viewContainerRef: ViewContainerRef) { }

  createComponent() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(DynamicComponentComponent);
    this.componentRef = this.entry.createComponent(factory);
 
  }
  destroyComponent() {
    this.componentRef.destroy();
  } 

  ngOnInit() {
  }

  create(): void
  {
    this.componentPortal = new ComponentPortal(DynamicComponentComponent);
    this.selectedPortal = this.componentPortal;
  }

  destroy(): void
  {
    this.selectedPortal.detach()
  }

  createOverlay(): void{

    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().centerVertically();
    config.hasBackdrop= true;
    let overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() =>{
      overlayRef.dispose();
    })
    overlayRef.attach(new ComponentPortal(DynamicComponentComponent,this.viewContainerRef))
  }

}
