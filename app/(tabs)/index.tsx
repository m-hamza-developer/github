import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const quickActions = [
  { id: 'workout', label: 'Workout', icon: 'barbell-outline' },
  { id: 'plans', label: 'Plans', icon: 'calendar-outline' },
  { id: 'nutrition', label: 'Nutrition', icon: 'leaf-outline' },
  { id: 'progress', label: 'Progress', icon: 'trending-up-outline' },
];

const workoutPlan = [
  {
    title: 'Upper Body Blast',
    subtitle: 'Push + Pull Circuit',
    duration: '28 min',
    sets: '4 sets',
    status: 'Completed',
    accent: '#7C5CFF',
  },
  {
    title: 'Leg Day Power',
    subtitle: 'Squats + Deadlifts',
    duration: '40 min',
    sets: '5 sets',
    status: 'Upcoming',
    accent: '#48C5FF',
  },
  {
    title: 'Core Stability',
    subtitle: 'Planks + Mobility',
    duration: '20 min',
    sets: '3 sets',
    status: 'Upcoming',
    accent: '#17C37B',
  },
];

const weeklyActivity = [
  { label: 'Mon', value: 68 },
  { label: 'Tue', value: 82 },
  { label: 'Wed', value: 54 },
  { label: 'Thu', value: 90 },
  { label: 'Fri', value: 76 },
  { label: 'Sat', value: 100 },
  { label: 'Sun', value: 60 },
];

const stats = [
  { label: 'Weight', value: '71.4 kg', icon: 'scale-outline' },
  { label: 'BMI', value: '22.4', icon: 'fitness-outline' },
  { label: 'Calories', value: '2,350', icon: 'flame-outline' },
  { label: 'Steps', value: '10.4k', icon: 'footsteps-outline' },
  { label: 'Streak', value: '12 days', icon: 'sparkles-outline' },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];
  
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [planImages, setPlanImages] = useState<{ [key: string]: string }>({});
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    // Generate random image URLs for featured and plan items
    const randomId = Math.floor(Math.random() * 10000);
    setFeaturedImageUrl(`https://picsum.photos/400/200?random=${randomId}`);
    
    const newPlanImages: { [key: string]: string } = {};
    workoutPlan.forEach((_, index) => {
      newPlanImages[index] = `https://picsum.photos/54/54?random=${randomId + index + 1}`;
    });
    setPlanImages(newPlanImages);
    setImagesLoading(false);
  }, []);

  const palette = {
    background: colorScheme === 'dark' ? '#10151B' : '#F4F6FB',
    panel: colorScheme === 'dark' ? '#171C23' : '#FFFFFF',
    panelAlt: colorScheme === 'dark' ? '#1F2731' : '#EEF2F9',
    border: colorScheme === 'dark' ? '#2A303A' : '#E5EAF2',
    text: colorScheme === 'dark' ? '#F5F7FA' : '#1B2230',
    subText: colorScheme === 'dark' ? '#A0A9B5' : '#5B6474',
    muted: colorScheme === 'dark' ? '#7F8896' : '#7A8293',
    accent: theme.tint,
    accentSoft: colorScheme === 'dark' ? 'rgba(124, 92, 255, 0.18)' : 'rgba(124, 92, 255, 0.12)',
    success: '#17C37B',
    info: '#48C5FF',
    shadow: 'rgba(15, 23, 42, 0.12)',
  };

  const quickActionColors = [palette.accent, '#48C5FF', '#17C37B', '#F7A76A'];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerRow}>
          <View style={[styles.avatarWrap, { backgroundColor: palette.panelAlt, borderColor: palette.accentSoft }]}>
            <Text style={[styles.avatarText, { color: palette.text }]}>AJ</Text>
          </View>

          <View style={styles.greetingWrap}>
            <Text style={[styles.greetingLabel, { color: palette.subText }]}>Good morning</Text>
            <Text style={[styles.greetingName, { color: palette.text }]}>Ariana</Text>
          </View>

          <Pressable style={[styles.notificationButton, { backgroundColor: palette.panel, borderColor: palette.border }]} accessibilityRole="button">
            <Ionicons name="notifications-outline" size={20} color={palette.text} />
            <View style={[styles.notificationBadge, { backgroundColor: palette.accent }]} />
          </Pressable>
        </View>

        <View style={[styles.progressCard, { backgroundColor: palette.panel, borderColor: palette.border, shadowColor: palette.shadow }]}>
          <View style={styles.progressHeaderRow}>
            <Text style={[styles.sectionLabel, { color: palette.text }]}>Progress</Text>
            <Text style={[styles.sectionTag, { color: palette.accent, backgroundColor: palette.accentSoft }]}>72%</Text>
          </View>

          <View style={styles.progressBody}>
            <View style={styles.progressRingWrap}>
              <View style={[styles.progressRingOuter, { borderColor: `${palette.accent}22` }]}>
                <View style={[styles.progressRingInner, { backgroundColor: palette.background, borderColor: palette.border }]}>
                  <Text style={[styles.progressValue, { color: palette.text }]}>72%</Text>
                </View>
              </View>
            </View>

            <View style={styles.metricsGrid}>
              <View style={[styles.metricItem, { backgroundColor: palette.panelAlt, borderColor: palette.border }]}>
                <Text style={[styles.metricValue, { color: palette.text }]}>2,540</Text>
                <Text style={[styles.metricLabel, { color: palette.subText }]}>kcal</Text>
              </View>
              <View style={[styles.metricItem, { backgroundColor: palette.panelAlt, borderColor: palette.border }]}>
                <Text style={[styles.metricValue, { color: palette.text }]}>48m</Text>
                <Text style={[styles.metricLabel, { color: palette.subText }]}>duration</Text>
              </View>
              <View style={[styles.metricItem, { backgroundColor: palette.panelAlt, borderColor: palette.border }]}>
                <Text style={[styles.metricValue, { color: palette.text }]}>9,240</Text>
                <Text style={[styles.metricLabel, { color: palette.subText }]}>steps</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.featuredCard, { backgroundColor: palette.panel, borderColor: palette.border }]}>
          <View style={[styles.featuredImage, { backgroundColor: palette.panelAlt }]}>
            {imagesLoading ? (
              <ActivityIndicator size="large" color={palette.accent} style={styles.imageLoader} />
            ) : (
              <Image
                source={{ uri: featuredImageUrl }}
                style={styles.featuredImageContent}
                resizeMode="cover"
              />
            )}
            <View style={[styles.imageGlow, { backgroundColor: palette.accentSoft }]} />
          </View>

          <View style={styles.featuredContent}>
            <View style={styles.featuredTopRow}>
              <Text style={[styles.featuredBadge, { color: palette.accent, backgroundColor: palette.accentSoft }]}>Featured</Text>
              <Text style={[styles.featuredMeta, { color: palette.subText }]}>Strength</Text>
            </View>

            <Text style={[styles.featuredTitle, { color: palette.text }]}>Power Circuit</Text>

            <View style={styles.featureMetaRow}>
              <Text style={[styles.metaText, { color: palette.subText }]}>8 exercises</Text>
              <Text style={[styles.dot, { color: palette.subText }]}>•</Text>
              <Text style={[styles.metaText, { color: palette.subText }]}>45 mins</Text>
              <Text style={[styles.dot, { color: palette.subText }]}>•</Text>
              <Text style={[styles.metaText, { color: palette.subText }]}>360 kcal</Text>
            </View>

            <Pressable style={[styles.primaryButton, { backgroundColor: palette.accent }]} accessibilityRole="button">
              <Text style={styles.primaryButtonText}>Start Workout</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.quickActionsWrap}>
          {quickActions.map((action, index) => (
            <Pressable key={action.id} style={[styles.quickActionCard, { backgroundColor: palette.panel, borderColor: palette.border }]} accessibilityRole="button">
              <View style={[styles.quickIconWrap, { backgroundColor: `${quickActionColors[index]}22` }]}>
                <Ionicons name={action.icon as any} size={20} color={quickActionColors[index]} />
              </View>
              <Text style={[styles.quickText, { color: palette.text }]}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        <View style={[styles.sectionCard, { backgroundColor: palette.panel, borderColor: palette.border }]}>
          <View style={styles.sectionHeaderRow}>
            <Text style={[styles.sectionTitle, { color: palette.text }]}>Workout plan</Text>
            <Text style={[styles.linkText, { color: palette.accent }]}>View all</Text>
          </View>

          {workoutPlan.map((item, planIndex) => (
            <View key={item.title} style={[styles.planItem, { backgroundColor: palette.panelAlt, borderColor: palette.border }]}>
              <View style={[styles.planThumb, { backgroundColor: `${item.accent}22` }]}>
                {planImages[planIndex] ? (
                  <Image
                    source={{ uri: planImages[planIndex] }}
                    style={styles.planThumbImage}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={[styles.planThumbInner, { backgroundColor: item.accent }]} />
                )}
              </View>

              <View style={styles.planContent}>
                <Text style={[styles.planTitle, { color: palette.text }]}>{item.title}</Text>
                <Text style={[styles.planSubtitle, { color: palette.subText }]}>{item.subtitle}</Text>

                <View style={styles.planMetaRow}>
                  <Text style={[styles.planMeta, { color: palette.text }]}>{item.duration}</Text>
                  <Text style={[styles.planMeta, { color: palette.text }]}>|</Text>
                  <Text style={[styles.planMeta, { color: palette.text }]}>{item.sets}</Text>
                </View>
              </View>

              <View style={[styles.statusPill, item.status === 'Completed' ? { backgroundColor: `${palette.success}1A` } : { backgroundColor: `${palette.info}1A` }]}>
                <Text style={[styles.statusText, item.status === 'Completed' ? { color: palette.success } : { color: palette.info }]}>
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.sectionCard, { backgroundColor: palette.panel, borderColor: palette.border }]}>
          <View style={styles.sectionHeaderRow}>
            <Text style={[styles.sectionTitle, { color: palette.text }]}>Weekly activity</Text>
            <Text style={[styles.linkText, { color: palette.accent }]}>4.8/5</Text>
          </View>

          <View style={styles.activityChartWrap}>
            {weeklyActivity.map((day) => (
              <View key={day.label} style={styles.activityBarColumn}>
                <View style={[styles.activityBarTrack, { backgroundColor: palette.panelAlt }]}>
                  <View
                    style={[
                      styles.activityBarFill,
                      {
                        height: `${day.value}%`,
                        backgroundColor: day.value > 80 ? palette.accent : day.value > 60 ? '#6ED7B8' : '#D9DFEA',
                      },
                    ]}
                  />
                </View>
                <Text style={[styles.activityLabel, { color: palette.subText }]}>{day.label}</Text>
              </View>
            ))}
          </View>

          <View style={[styles.summaryRow, { backgroundColor: palette.panelAlt, borderColor: palette.border }]}>
            <Text style={[styles.summaryText, { color: palette.text }]}>Completed 5 workouts this week</Text>
            <Text style={[styles.summaryNumber, { color: palette.accent }]}>+18%</Text>
          </View>
        </View>

        <View style={styles.statsSection}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Fitness stats</Text>

          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View key={stat.label} style={[styles.statCard, { backgroundColor: palette.panel, borderColor: palette.border }]}>
                <View style={[styles.statIconWrap, { backgroundColor: palette.accentSoft }]}>
                  <Ionicons name={stat.icon as any} size={18} color={palette.accent} />
                </View>
                <Text style={[styles.statValue, { color: palette.text }]}>{stat.value}</Text>
                <Text style={[styles.statLabel, { color: palette.subText }]}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.bannerCard, { backgroundColor: palette.panel, borderColor: palette.border }]}>
          <View style={styles.bannerTextWrap}>
            <Text style={[styles.bannerEyebrow, { color: palette.accent }]}>Keep pushing</Text>
            <Text style={[styles.bannerTitle, { color: palette.text }]}>Consistency compounds.</Text>
            <Text style={[styles.bannerCopy, { color: palette.subText }]}>One more set today is one step closer to your best version.</Text>
          </View>

          <View style={[styles.bannerArt, { backgroundColor: palette.accentSoft }]}>
            <View style={[styles.bannerPerson, { backgroundColor: palette.accent }]} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  avatarText: {
    fontWeight: '700',
    fontSize: 15,
  },
  greetingWrap: {
    flex: 1,
    marginLeft: 12,
  },
  greetingLabel: {
    fontSize: 12,
    letterSpacing: 0.4,
  },
  greetingName: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 2,
  },
  notificationButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 7,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  progressCard: {
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 4,
    marginBottom: 16,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  sectionLabel: {
    fontWeight: '700',
    fontSize: 18,
  },
  sectionTag: {
    fontWeight: '700',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  progressBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressRingWrap: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRingOuter: {
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-45deg' }],
  },
  progressRingInner: {
    width: 84,
    height: 84,
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    transform: [{ rotate: '45deg' }],
  },
  progressValue: {
    fontWeight: '800',
    fontSize: 22,
  },
  metricsGrid: {
    flex: 1,
    marginLeft: 16,
  },
  metricItem: {
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
    borderWidth: 1,
  },
  metricValue: {
    fontWeight: '700',
    fontSize: 16,
  },
  metricLabel: {
    fontSize: 11,
    marginTop: 2,
    textTransform: 'lowercase',
  },
  featuredCard: {
    borderRadius: 28,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 16,
  },
  featuredImage: {
    height: 160,
    position: 'relative',
  },
  imageGlow: {
    position: 'absolute',
    inset: 0,
  },
  featuredContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 20,
  },
  featuredTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredBadge: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 11,
    fontWeight: '700',
  },
  featuredMeta: {
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  featureMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '600',
  },
  dot: {
    marginHorizontal: 6,
  },
  primaryButton: {
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  quickActionsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quickActionCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 14,
    marginHorizontal: 4,
  },
  quickIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickText: {
    fontSize: 12,
    fontWeight: '600',
  },
  sectionCard: {
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 18,
  },
  linkText: {
    fontWeight: '700',
    fontSize: 12,
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  planThumb: {
    width: 54,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  planThumbInner: {
    width: 24,
    height: 24,
    borderRadius: 10,
  },
  planContent: {
    flex: 1,
  },
  planTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  planSubtitle: {
    fontSize: 12,
    marginBottom: 8,
  },
  planMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  planMeta: {
    fontSize: 11,
    opacity: 0.8,
    marginRight: 8,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  activityChartWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 120,
    paddingTop: 12,
  },
  activityBarColumn: {
    flex: 1,
    alignItems: 'center',
  },
  activityBarTrack: {
    width: 20,
    height: 90,
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  activityBarFill: {
    width: '100%',
    borderRadius: 12,
  },
  activityLabel: {
    fontSize: 11,
    marginTop: 8,
  },
  summaryRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
  },
  summaryText: {
    fontSize: 12,
    fontWeight: '600',
  },
  summaryNumber: {
    fontWeight: '800',
    fontSize: 12,
  },
  statsSection: {
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '31.5%',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 10,
  },
  statIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  statValue: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    textAlign: 'center',
  },
  bannerCard: {
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  bannerTextWrap: {
    flex: 1,
    paddingRight: 12,
  },
  bannerEyebrow: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  bannerCopy: {
    fontSize: 12,
    lineHeight: 18,
  },
  bannerArt: {
    width: 88,
    height: 88,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerPerson: {
    width: 52,
    height: 52,
    borderRadius: 26,
    opacity: 0.8,
  },
  imageLoader: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredImageContent: {
    width: '100%',
    height: '100%',
  },
  planThumbImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

