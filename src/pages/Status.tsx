
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Calendar,
  Info,
  Activity,
  Server,
  Database,
  Cloud,
  Lock,
  Bell,
  RefreshCw
} from "lucide-react";

const systemComponents = [
  {
    name: "API Services",
    status: "operational",
    uptime: "99.98%",
    icon: Server
  },
  {
    name: "Web Application",
    status: "operational",
    uptime: "99.99%",
    icon: Globe
  },
  {
    name: "Authentication",
    status: "operational",
    uptime: "100%",
    icon: Lock
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.97%",
    icon: Database
  },
  {
    name: "Desktop Application",
    status: "degraded",
    uptime: "97.53%",
    issue: "Performance issues on macOS 13.4",
    icon: Monitor
  },
  {
    name: "Mobile Application",
    status: "operational",
    uptime: "99.95%",
    icon: Smartphone
  },
  {
    name: "Storage Services",
    status: "operational",
    uptime: "99.99%",
    icon: HardDrive
  },
  {
    name: "Sync Services",
    status: "operational",
    uptime: "99.92%",
    icon: RefreshCw
  },
  {
    name: "Notifications",
    status: "operational",
    uptime: "99.90%",
    icon: Bell
  },
  {
    name: "AI Features",
    status: "operational",
    uptime: "99.85%",
    icon: Brain
  }
];

const incidents = [
  {
    date: "April 12, 2023",
    title: "Sync Services Degradation",
    description: "Some users experienced delays in cross-device synchronization due to increased demand.",
    duration: "45 minutes",
    status: "resolved",
    affected: ["Sync Services"]
  },
  {
    date: "March 28, 2023",
    title: "Desktop App Performance Issue",
    description: "The latest update caused performance issues for some macOS users. A hotfix has been deployed.",
    duration: "3 hours",
    status: "resolved",
    affected: ["Desktop Application"]
  },
  {
    date: "February 15, 2023",
    title: "Database Maintenance",
    description: "Scheduled maintenance caused brief read-only mode for all users. Completed ahead of schedule.",
    duration: "20 minutes",
    status: "resolved",
    affected: ["Database", "Sync Services"]
  }
];

const maintenanceSchedule = [
  {
    date: "April 25, 2023",
    time: "2:00 AM - 4:00 AM UTC",
    title: "Database Optimization",
    description: "Scheduled maintenance to improve database performance. Brief periods of read-only access expected.",
    affected: ["Database", "Sync Services"]
  },
  {
    date: "May 10, 2023",
    time: "1:00 AM - 3:00 AM UTC",
    title: "API Infrastructure Upgrade",
    description: "Upgrading our API infrastructure to support new features and improved performance.",
    affected: ["API Services"]
  }
];

// Import missing icon components
import { Globe, Monitor, Smartphone, HardDrive, Brain } from "lucide-react";

const StatusIndicator = ({ status }) => {
  const statusConfig = {
    operational: {
      color: "bg-green-500",
      icon: CheckCircle,
      text: "Operational"
    },
    degraded: {
      color: "bg-yellow-500",
      icon: AlertCircle,
      text: "Degraded"
    },
    outage: {
      color: "bg-red-500",
      icon: AlertCircle,
      text: "Outage"
    },
    maintenance: {
      color: "bg-blue-500",
      icon: Clock,
      text: "Maintenance"
    }
  };
  
  const config = statusConfig[status];
  
  return (
    <div className="flex items-center">
      <div className={`w-2.5 h-2.5 rounded-full ${config.color} mr-2`}></div>
      <config.icon className="w-4 h-4 mr-1.5" />
      <span>{config.text}</span>
    </div>
  );
};

const SystemComponentCard = ({ component }) => (
  <div className="glass-panel p-4 flex items-center justify-between">
    <div className="flex items-center">
      <div className="p-2 rounded-lg bg-white/10 mr-3">
        <component.icon className="w-5 h-5" />
      </div>
      <span>{component.name}</span>
    </div>
    
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-400 hidden sm:inline">{component.uptime}</span>
      <StatusIndicator status={component.status} />
    </div>
  </div>
);

const IncidentCard = ({ incident, index }) => (
  <motion.div
    className="glass-panel p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <div className="flex items-center mb-2">
          <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
          <span className="text-sm text-gray-400">{incident.date}</span>
          <span className="mx-2 text-gray-600">•</span>
          <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
          <span className="text-sm text-gray-400">{incident.duration}</span>
        </div>
        <h3 className="text-lg font-medium">{incident.title}</h3>
      </div>
      
      <span className="px-2.5 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
        Resolved
      </span>
    </div>
    
    <p className="text-gray-400 text-sm mb-4">{incident.description}</p>
    
    <div className="flex flex-wrap gap-2">
      <span className="text-xs text-gray-500">Affected:</span>
      {incident.affected.map((system, idx) => (
        <span key={idx} className="text-xs bg-white/10 rounded-full px-2.5 py-1">
          {system}
        </span>
      ))}
    </div>
  </motion.div>
);

const MaintenanceCard = ({ maintenance, index }) => (
  <motion.div
    className="p-4 border-b border-white/10 last:border-0"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
        <span className="text-sm">{maintenance.date}</span>
        <span className="mx-2 text-gray-600">•</span>
        <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
        <span className="text-sm">{maintenance.time}</span>
      </div>
      
      <span className="px-2.5 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
        Scheduled
      </span>
    </div>
    
    <h3 className="font-medium mb-1">{maintenance.title}</h3>
    <p className="text-gray-400 text-sm mb-2">{maintenance.description}</p>
    
    <div className="flex flex-wrap gap-2">
      <span className="text-xs text-gray-500">Affected:</span>
      {maintenance.affected.map((system, idx) => (
        <span key={idx} className="text-xs bg-white/10 rounded-full px-2.5 py-1">
          {system}
        </span>
      ))}
    </div>
  </motion.div>
);

const Status = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 mb-6">
            <Activity className="w-5 h-5 mr-2" />
            <span>System Status</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">CopyClipCloud Status</span>
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <p className="text-xl font-medium">All Systems Operational</p>
          </div>
          
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Current status of CopyClipCloud services. This page is updated in real time as issues are identified and resolved.
          </p>
          
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Info className="w-4 h-4 mr-1.5" />
            <span>Last updated: April 19, 2023 - 09:45 UTC</span>
            <button className="ml-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">Current Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {systemComponents.map((component, index) => (
              <SystemComponentCard key={index} component={component} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <IncidentCard key={index} incident={incident} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16 glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold">Upcoming Maintenance</h2>
          </div>
          
          <div className="divide-y divide-white/10">
            {maintenanceSchedule.map((maintenance, index) => (
              <MaintenanceCard key={index} maintenance={maintenance} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to receive notifications about service outages and scheduled maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-white/10 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="mt-6">
            <a 
              href="#rss"
              className="text-white hover:underline inline-flex items-center text-sm"
            >
              <Rss className="w-4 h-4 mr-1.5" />
              Subscribe to RSS feed
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

// Import missing Rss icon
import { Rss } from "lucide-react";

export default Status;
