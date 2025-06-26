
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import FilterSidebar from './FilterSidebar';

interface MobileFilterDrawerProps {
  filters: {
    priceRange: [number, number];
    serviceTypes: string[];
    rating: number;
    location: string;
    availability: string[];
  };
  onFiltersChange: (filters: any) => void;
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({ filters, onFiltersChange }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filtros</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtros de Busca</DrawerTitle>
          <DrawerDescription>
            Ajuste os filtros para encontrar as faxineiras ideais
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto">
          <FilterSidebar filters={filters} onFiltersChange={onFiltersChange} />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="w-full">Aplicar Filtros</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilterDrawer;
