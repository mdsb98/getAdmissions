import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent {

  title = 'CodeSandbox';
  activeMenu: number | null = null; // Tracks which menu is active
  activeContent: string | null = null;

  toggleSubMenu(index: number, isVisible: boolean): void {
    this.activeMenu = isVisible ? index : null;
  }
  setActiveContent(content: string): void {
    this.activeContent = content;
    this.activeMenu = null;
  }
  closeContent(): void {
    this.activeContent = null; // Close right-side content
  }

}
