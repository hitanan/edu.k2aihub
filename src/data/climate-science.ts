import { BaseLessonData } from '@/components/learning/LessonPageTemplate';

export interface ClimateLessonData extends BaseLessonData {
  climateConcepts?: string[];
  researchMethods?: string[];
  climateData?: Array<{
    source: string;
    type: string;
    description: string;
    accessibility: string;
  }>;
}

export const ClimateLessons: ClimateLessonData[] = [
  {
    id: 'climate-science-fundamentals',
    title: 'Cơ bản về Khoa học Khí hậu',
    description:
      'Tìm hiểu các nguyên lý cơ bản của hệ thống khí hậu Trái Đất và biến đổi khí hậu.',
    duration: '140 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=ffjIyms1BX4',
    imageUrl: '/images/climate-fundamentals.jpg',
    objectives: [
      'Hiểu hệ thống khí hậu Trái Đất và các thành phần',
      'Nắm vững hiệu ứng nhà kính và bức xạ',
      'Tìm hiểu các yếu tố gây biến đổi khí hậu',
      'Phân tích dữ liệu khí hậu cơ bản',
    ],
    prerequisites: [
      'Vật lý đại cương',
      'Hóa học cơ bản',
      'Toán học cấp 3',
      'Địa lý tự nhiên',
    ],
    exercises: [
      {
        title: 'Phân tích dữ liệu nhiệt độ toàn cầu',
        description:
          'Sử dụng Python để phân tích xu hướng nhiệt độ từ dataset NASA GISS',
        difficulty: 'Cơ bản',
        materials: [
          'Python',
          'pandas',
          'matplotlib',
          'numpy',
          'NASA GISS dataset',
        ],
        procedure: [
          'Download dữ liệu nhiệt độ từ NASA GISS Surface Temperature',
          'Load data với pandas và clean missing values',
          'Tính temperature anomalies theo base period 1951-1980',
          'Tạo time series plot cho global temperature trend',
          'Tính linear regression để xác định warming rate',
          'Visualize seasonal variations',
          'So sánh regional vs global trends',
        ],
        expectedResults:
          'Phát hiện xu hướng tăng nhiệt độ toàn cầu ~1.1°C từ thời kỳ tiền công nghiệp',
        solution:
          '# Climate Data Analysis\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy import stats\n\n# Load NASA GISS temperature data\nurl = "https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv"\ndf = pd.read_csv(url, skiprows=1)\n\n# Clean and prepare data\ndf = df[df["Year"] >= 1880]  # Reliable data from 1880\ndf["AnnualMean"] = df[["Jan", "Feb", "Mar", "Apr", "May", "Jun", \n                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]].mean(axis=1)\n\n# Calculate temperature anomalies (base: 1951-1980)\nbase_period = df[(df["Year"] >= 1951) & (df["Year"] <= 1980)]\nbaseline = base_period["AnnualMean"].mean()\ndf["Anomaly"] = df["AnnualMean"] - baseline\n\n# Linear regression for trend\nslope, intercept, r_value, p_value, std_err = stats.linregress(df["Year"], df["Anomaly"])\nprint(f"Warming rate: {slope:.3f}°C per decade")\nprint(f"R-squared: {r_value**2:.3f}")\n\n# Plotting\nfig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 10))\n\n# Temperature anomaly trend\nax1.plot(df["Year"], df["Anomaly"], alpha=0.7, color="blue", label="Annual")\nax1.plot(df["Year"], slope * df["Year"] + intercept, "r-", label=f"Trend: {slope:.3f}°C/decade")\nax1.axhline(y=0, color="black", linestyle="--", alpha=0.5)\nax1.set_ylabel("Temperature Anomaly (°C)")\nax1.set_title("Global Temperature Anomalies (1880-2023)")\nax1.legend()\nax1.grid(True, alpha=0.3)\n\n# Recent decades comparison\nrecent_30yr = df[df["Year"] >= 1994]["Anomaly"].mean()\nearly_30yr = df[(df["Year"] >= 1880) & (df["Year"] <= 1909)]["Anomaly"].mean()\ndifference = recent_30yr - early_30yr\n\nax2.bar(["1880-1909", "1994-2023"], [early_30yr, recent_30yr], \n        color=["lightblue", "red"], alpha=0.7)\nax2.set_ylabel("Average Temperature Anomaly (°C)")\nax2.set_title(f"30-Year Average Comparison\\nDifference: {difference:.2f}°C")\nax2.axhline(y=0, color="black", linestyle="--", alpha=0.5)\n\nplt.tight_layout()\nplt.show()\n\n# Key statistics\nprint(f"\\nKey Climate Statistics:")\nprint(f"Temperature increase since 1880: {df.iloc[-1][\"Anomaly\"] - df.iloc[0][\"Anomaly\"]:.2f}°C")\nprint(f"Warmest year on record: {df.loc[df[\"Anomaly\"].idxmax(), \"Year\"]} ({df[\"Anomaly\"].max():.2f}°C)")\nprint(f"Number of years above 1°C warming: {len(df[df[\"Anomaly\"] > 1.0])}")',
      },
    ],
    realWorldApplications: [
      'Weather forecasting và climate modeling',
      'Agriculture planning và crop selection',
      'Water resource management',
      'Disaster preparedness và early warning',
      'Urban planning cho climate adaptation',
    ],
    caseStudies: [
      {
        title: 'IPCC Climate Assessment Reports',
        organization: 'Intergovernmental Panel on Climate Change',
        problem: 'Synthesize global climate science for policymakers',
        solution: 'Comprehensive assessment của climate data và projections',
        impact: 'Fundamental basis cho Paris Agreement và climate policy',
        innovations: [
          'Multi-model ensembles',
          'Uncertainty quantification',
          'Regional downscaling',
        ],
      },
    ],
    climateConcepts: [
      'Greenhouse Effect',
      'Radiative Forcing',
      'Climate Feedbacks',
      'Carbon Cycle',
      'Ocean Circulation',
    ],
  },
  {
    id: 'climate-modeling-data',
    title: 'Climate Modeling và Big Data',
    description:
      'Học cách sử dụng các mô hình khí hậu và phân tích big data để dự báo khí hậu.',
    duration: '180 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=qo-H-47Eyz8',
    objectives: [
      'Hiểu các loại climate models: GCM, RCM, ESM',
      'Nắm vững data assimilation và ensemble methods',
      'Sử dụng satellite data để monitor climate',
      'Thực hành với climate datasets và APIs',
    ],
    prerequisites: [
      'Climate science fundamentals',
      'Python programming',
      'Statistics và data analysis',
      'Numerical methods',
    ],
    exercises: [
      {
        title: 'Climate Model Ensemble Analysis',
        description:
          'Phân tích projections từ nhiều climate models để đánh giá uncertainty',
        difficulty: 'Nâng cao',
        materials: ['Python', 'xarray', 'netCDF4', 'cartopy', 'CMIP6 data'],
        procedure: [
          'Access CMIP6 model data qua Earth System Grid Federation',
          'Load multiple model outputs với xarray',
          'Calculate ensemble mean và spread cho temperature',
          'Analyze regional vs global projection differences',
          'Quantify model agreement và uncertainty',
          'Create visualization với confidence intervals',
          'Identify climate hotspots với high uncertainty',
        ],
        expectedResults:
          'Comprehensive analysis của climate projection uncertainty',
        solution:
          '# Climate Model Ensemble Analysis\nimport xarray as xr\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport cartopy.crs as ccrs\nimport cartopy.feature as cfeature\nfrom cartopy.mpl.ticker import LongitudeFormatter, LatitudeFormatter\n\n# Load CMIP6 model ensemble data\n# This example uses pre-processed ensemble data\ndef load_cmip6_ensemble():\n    # In practice, you would load from multiple model files\n    # Here we simulate ensemble data\n    models = ["CESM2", "GFDL-ESM4", "MPI-ESM1-2-HR", "UKESM1-0-LL"]\n    \n    # Simulate temperature change data (2081-2100 vs 1995-2014)\n    lat = np.linspace(-90, 90, 180)\n    lon = np.linspace(-180, 180, 360)\n    \n    ensemble_data = []\n    for i, model in enumerate(models):\n        # Simulate model-specific warming patterns\n        temp_change = np.random.normal(2.5 + i*0.3, 0.5, (len(lat), len(lon)))\n        # Add realistic spatial patterns\n        lat_grid, lon_grid = np.meshgrid(lat, lon, indexing="ij")\n        temp_change += 1.5 * np.cos(np.radians(lat_grid))**2  # Arctic amplification\n        \n        da = xr.DataArray(\n            temp_change,\n            coords={"lat": lat, "lon": lon},\n            dims=["lat", "lon"],\n            name=f"tas_change_{model}"\n        )\n        ensemble_data.append(da)\n    \n    return xr.concat(ensemble_data, dim="model")\n\n# Load ensemble data\nensemble = load_cmip6_ensemble()\n\n# Calculate ensemble statistics\nensemble_mean = ensemble.mean(dim="model")\nensemble_std = ensemble.std(dim="model")\nmodel_agreement = (ensemble > 0).sum(dim="model") / len(ensemble.model)\n\n# Create visualization\nfig = plt.figure(figsize=(15, 12))\n\n# Ensemble mean temperature change\nax1 = plt.subplot(2, 2, 1, projection=ccrs.PlateCarree())\nim1 = ax1.contourf(ensemble_mean.lon, ensemble_mean.lat, ensemble_mean, \n                   levels=np.linspace(0, 6, 13), cmap="RdYlBu_r", \n                   transform=ccrs.PlateCarree())\nax1.add_feature(cfeature.COASTLINE)\nax1.add_feature(cfeature.BORDERS)\nax1.set_global()\nax1.set_title("Ensemble Mean Temperature Change (°C)")\ncbar1 = plt.colorbar(im1, ax=ax1, shrink=0.6)\n\n# Ensemble standard deviation (uncertainty)\nax2 = plt.subplot(2, 2, 2, projection=ccrs.PlateCarree())\nim2 = ax2.contourf(ensemble_std.lon, ensemble_std.lat, ensemble_std,\n                   levels=np.linspace(0, 2, 11), cmap="viridis",\n                   transform=ccrs.PlateCarree())\nax2.add_feature(cfeature.COASTLINE)\nax2.add_feature(cfeature.BORDERS)\nax2.set_global()\nax2.set_title("Ensemble Standard Deviation (°C)")\ncbar2 = plt.colorbar(im2, ax=ax2, shrink=0.6)\n\n# Model agreement\nax3 = plt.subplot(2, 2, 3, projection=ccrs.PlateCarree())\nim3 = ax3.contourf(model_agreement.lon, model_agreement.lat, model_agreement,\n                   levels=np.linspace(0, 1, 11), cmap="RdYlGn",\n                   transform=ccrs.PlateCarree())\nax3.add_feature(cfeature.COASTLINE)\nax3.add_feature(cfeature.BORDERS)\nax3.set_global()\nax3.set_title("Model Agreement (fraction agreeing on warming)")\ncbar3 = plt.colorbar(im3, ax=ax3, shrink=0.6)\n\n# Regional analysis\nax4 = plt.subplot(2, 2, 4)\n# Arctic vs Tropical warming\narctic_warming = ensemble.sel(lat=slice(70, 90)).mean(dim=["lat", "lon"])\ntropical_warming = ensemble.sel(lat=slice(-20, 20)).mean(dim=["lat", "lon"])\n\nax4.boxplot([arctic_warming.values, tropical_warming.values], \n           labels=["Arctic (70-90°N)", "Tropics (20°S-20°N)"])\nax4.set_ylabel("Temperature Change (°C)")\nax4.set_title("Regional Warming Comparison")\nax4.grid(True, alpha=0.3)\n\nplt.tight_layout()\nplt.show()\n\n# Print summary statistics\nprint("Climate Model Ensemble Analysis Summary:")\nprint(f"Global mean warming: {ensemble_mean.mean().values:.2f} ± {ensemble_std.mean().values:.2f}°C")\nprint(f"Arctic amplification factor: {arctic_warming.mean().values / tropical_warming.mean().values:.2f}")\nprint(f"High agreement regions (>80%): {(model_agreement > 0.8).sum().values / model_agreement.size * 100:.1f}% of globe")',
      },
    ],
    realWorldApplications: [
      'Seasonal weather forecasting',
      'Climate impact assessment cho infrastructure',
      'Agricultural yield predictions',
      'Water resource planning',
      'Extreme weather risk assessment',
    ],
    researchMethods: [
      'Ensemble forecasting',
      'Data assimilation',
      'Downscaling techniques',
      'Bias correction',
      'Uncertainty quantification',
    ],
  },
  {
    id: 'climate-solutions-tech',
    title: 'Climate Solutions và Green Technology',
    description:
      'Khám phá các giải pháp công nghệ để giảm thiểu và thích ứng với biến đổi khí hậu.',
    duration: '150 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu renewable energy technologies',
      'Nắm vững carbon capture và storage',
      'Tìm hiểu geoengineering approaches',
      'Đánh giá lifecycle assessment của green technologies',
    ],
    prerequisites: [
      'Climate science basics',
      'Engineering fundamentals',
      'Environmental science',
    ],
    exercises: [
      {
        title: 'Renewable Energy System Design',
        description:
          'Thiết kế hệ thống năng lượng tái tạo cho một thành phố nhỏ',
        difficulty: 'Trung bình',
        procedure: [
          'Phân tích energy demand patterns',
          'Đánh giá solar và wind resources',
          'Design hybrid renewable system',
          'Calculate battery storage requirements',
          'Estimate costs và payback period',
          'Assess environmental impact',
          'Compare với fossil fuel alternatives',
        ],
      },
    ],
    realWorldApplications: [
      'Smart grid integration',
      'Electric vehicle infrastructure',
      'Carbon capture facilities',
      'Sustainable agriculture',
      'Green building design',
    ],
  },
  {
    id: 'climate-policy-economics',
    title: 'Climate Policy và Economics',
    description:
      'Tìm hiểu các chính sách khí hậu và khía cạnh kinh tế của biến đổi khí hậu.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
      'Hiểu carbon pricing mechanisms',
      'Nắm vững climate finance và green bonds',
      'Tìm hiểu international climate agreements',
      'Đánh giá economic impacts của climate change',
    ],
    prerequisites: [
      'Economics basics',
      'Climate science understanding',
      'Policy analysis',
    ],
    exercises: [
      {
        title: 'Carbon Footprint Analysis',
        description:
          'Tính toán và phân tích carbon footprint của một doanh nghiệp',
        difficulty: 'Trung bình',
        procedure: [
          'Inventory tất cả emission sources',
          'Apply emission factors cho các activities',
          'Calculate Scope 1, 2, 3 emissions',
          'Identify reduction opportunities',
          'Estimate costs của mitigation measures',
          'Develop net-zero roadmap',
          'Compare với industry benchmarks',
        ],
      },
    ],
    realWorldApplications: [
      'Corporate sustainability reporting',
      'Carbon offset markets',
      'ESG investment criteria',
      'Climate risk assessment cho finance',
      'Green taxonomy và regulations',
    ],
    climateData: [
      {
        source: 'NASA GISS',
        type: 'Global temperature records',
        description: 'Monthly mean temperature anomalies since 1880',
        accessibility: 'Free public access',
      },
      {
        source: 'NOAA Global Monitoring Laboratory',
        type: 'Atmospheric CO2 concentrations',
        description: 'Mauna Loa CO2 measurements since 1958',
        accessibility: 'Free public access',
      },
    ],
  },
];
